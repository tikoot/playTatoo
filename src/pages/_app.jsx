import "../styles/globals.css";
import { CookiePopover } from "../components/CookiePopover";
import { RECAPTCHA_SITE_KEY } from "../utils/constants";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import CookieBanner from "../components/CookieBanner";

function App({ Component, pageProps }) {
	return (
		<GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
			<Component {...pageProps} />
			<CookieBanner />
		</GoogleReCaptchaProvider>
	);
}

export default App;
