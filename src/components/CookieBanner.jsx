import { XCircleIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useCookie } from "../hooks/useCookie";
import { useCallback, useEffect, useState } from "react"
const consentCookieOptions = {
    days: 365,
    SameSite: "Strict",
    Secure: true,
};

export default function CookieBanner() {
    const [show, setShow] = useState(false)
    const [consentCookie, setConsentCookie] = useCookie("CookieConsent");

    useEffect(() => {
        if (!consentCookie)
            setShow(true)
    }, [consentCookie])

    const onClose = useCallback(() => {
        setConsentCookie(JSON.stringify({
            necessary: true,
            personalise: false,
            ads: false,
            traffic: false,
            partners: false,
        }, consentCookieOptions));
        setTimeout(() => {
            setShow(false)
        }, 300)
    });

    return show && <div className="fixed bottom-0 w-screen">
        <div className="bg-gray-800 text-white mx-auto flex justify-evenly md:justify-center items-start md:pt-0 pt-2">
            <p className="px-4 py-2">This website stores data such as cookies to enable essential site functionality, as well as marketing, personalization, and analytics. By remaining on this website you indicate your consent.
                <Link href="https://www.playtato.com/privacy">
                    <a className="ml-4 text-yellow-500 hover:underline hover:text-yellow-300">Privacy Policy</a>
                </Link>
            </p>

            <XCircleIcon onClick={() => onClose()} className="md:w-10 w-40 md:mt-0 mr-2 hover:cursor-pointer" />
        </div>
    </div>
}