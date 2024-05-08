import { Image } from "@nextui-org/image";
import { homeData } from "../../public/content/homeData";

export default function HeroLayout() {
    return (
        <div className="w-screen h-3/4 overflow-hidden flex items-center z-10 relative">
            <Image src={homeData.heroImage} alt="Hero Image relative"></Image>
            <div className={`absolute w-screen h-[100px] -top-[25px] bg-gradient-to-b from-black via-black to-transparent z-10`}></div>
            <div className={`absolute w-screen h-1/3 -bottom-[50px] bg-gradient-to-t from-black via-black to-transparent z-10`}></div>
        </div>
    );
}
