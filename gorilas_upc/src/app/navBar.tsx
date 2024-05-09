import Image from "next/legacy/image";

export default function NavBar() {
    return (
        <div className="z-20">
            <div className="flex h-[70px] items-center text-center justify-center" style={{ fontFamily: 'Rubik' }}>
                <a className="w-[15%]">CONTACTE</a>
                <a className="w-[15%]">VULL ENTRENAR</a>
                {/*<a className="w-[30%] text-4xl">GORILAS UPC</a>*/}
                <div className="w-[30%] h-[35px] relative">
                    <Image layout="fill" objectFit="contain" alt="Icono rugby" src={'/images/gorilesIcon.JPG'}></Image>
                </div>
                <a className="w-[15%]">NOVETATS</a>
                <a className="w-[15%]" href="https://www.instagram.com/clubrugbyupc/">INSTAGRAM</a>
            </div>
        </div>
    );
}