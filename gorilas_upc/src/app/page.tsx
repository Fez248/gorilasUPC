import { homeData } from "../../public/content/homeData";
import NavBar from "./navBar";
import HeroLayout from "./heroLayout";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="h-screen w-screen bg-black">
        <HeroLayout></HeroLayout>
      </div>
      <div className="h-screen w-screen bg-[#166BCB]">

      </div>
    </div>
  );
}

