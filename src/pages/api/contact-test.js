import nodemailer from "nodemailer";
import { EMAIL, RECAPTCHA_SECRET_KEY } from "../../utils/constants";

async function createContactEmail() {
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	const testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	return nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	});
}

async function sendEmail(body) {
	const contactEmail = await createContactEmail();

	const info = await contactEmail.sendMail({
		from: body.email,
		to: EMAIL,
		subject: body.subject,
		html: `<div>
						<address>
							👤 ${body.firstName} ${body.lastName}<br/>
							📧 <a href="mailto:${body.email}">${body.email}</a><br>
							📞 <a href="tel:${body.phone}">${body.phone}</a>
						</address>
						
						<p>${body.message}</p>
					</div>`,
	});

	console.log("Message sent: %s", info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default async function handler(req, res) {
	try {
		if (req.method === "POST") {
			const body = req.body;

			const recaptchaResponseRaw = await fetch(
				"https://www.google.com/recaptcha/api/siteverify",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: `secret=${RECAPTCHA_SECRET_KEY}&response=${body.token}`,
				}
			);

			const recaptchaResponse = await recaptchaResponseRaw.json();

			console.log("ReCAPTCHA score:", recaptchaResponse.score);

			if (recaptchaResponse?.score > 0.5) {
				// Send the email if user is considered "good"
				await sendEmail(body);

				// Success
				res.status(200).end();
			} else {
				// Unauthorized
				res.status(401).end();
			}
		} else {
			// Method not allowed
			res.status(405).end();
		}
	} catch (err) {
		console.error(err);
		// Internal server error
		res.status(500).end();
	}
}
