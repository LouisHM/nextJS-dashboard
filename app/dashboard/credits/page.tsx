import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <p>Cet examen à été réalisé par Louis Maury !</p>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                <Image
                    src="/avatar.jpg"
                    width={400}
                    height={200}
                    className="hidden md:block"
                    alt="Avatar of the author"
                />
            </div>
        </div>
    );
}
