import { homeData } from "../../public/content/homeData";
import HeroLayout from "./heroLayout";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <HeroLayout colorGradient="black"></HeroLayout>
      <h1 className="absolute left-[50%] -translate-x-[50%] bg-transparent">{homeData.title}</h1>
    </div>
  );
}

