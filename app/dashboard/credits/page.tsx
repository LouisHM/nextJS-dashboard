import Image from 'next/image';

export default function Page() {
    return (
        <p>Cet examen à été réalisé par Louis Maury !</p>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
    );
}