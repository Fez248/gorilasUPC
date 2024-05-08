import Image from "next/legacy/image";

export default function NavBar() {
    return (
        <div>
            <div className="flex gap-3 place-content-around h-[50px] items-center" style={{ fontFamily: 'Rubik' }}>
                <a>CONTACTE</a>
                <a>VULL ENTRENAR</a>
                <div className="w-[35px] h-[35px] relative">
                    <Image layout="fill" objectFit="contain" alt="Icono rugby" src={'/images/gorilesIcon.JPG'}></Image>
                </div>
                <a>NOVETATS</a>
                <a href="https://www.instagram.com/clubrugbyupc/">INSTAGRAM</a>
            </div>
        </div>
    );
}