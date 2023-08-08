const IMAGES = {
    'android': '/platforms/android.svg',
    'web': '/platforms/web.png',
    'ios': '/platforms/ios.svg'
};

export default function PlatformLink({ platform }) {

    return <a href={platform.link}>
        <img className="h-8 w-auto sm:h-10 md:h-12 lg:h-14" src={IMAGES[platform.name]} alt={platform.name} />
    </a>
}