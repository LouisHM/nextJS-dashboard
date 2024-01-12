import Image from 'next/image';

export default function Page() {
    return (
        <p>Cet examen à été réalisé par Louis Maury !</p>
        <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
    );
}