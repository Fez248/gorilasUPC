import Image from "next/image";

export default function NavBar() {
    return (
        <div className="flex">
            <p>AAA</p>
            <p>BBB</p>
            <Image layout="fill" alt="Icono rugby" src={'/gorilesIcon.JPG'}></Image>
        </div>
    );
}