import { Image } from "@nextui-org/image";
import { homeData } from "../../public/content/homeData";

export default function HeroLayout() {
    return (
        <div className="w-screen h-3/4 overflow-hidden flex items-center">
            <Image src={homeData.heroImage} alt="Hero Image relative"></Image>
            <div className={`absolute w-screen h-1/3 top-2/4 bg-gradient-to-t from-black via-black to-transparent`}></div>
        </div>
    );
}
