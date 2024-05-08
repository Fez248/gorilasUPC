import { Image } from "@nextui-org/image";
import { homeData } from "../../public/content/homeData";

export default function HeroLayout({colorGradient}: {colorGradient: string}) {
    return (
        <div className="w-screen h-3/4 overflow-hidden flex items-center justify-center">
            <Image src={homeData.heroImage} alt="Hero Image relative"></Image>
            <div className={`absolute w-screen h-1/3 top-2/4 bg-gradient-to-t from-${colorGradient} via-${colorGradient} to-transparent`}></div>
        </div>
    );
}
