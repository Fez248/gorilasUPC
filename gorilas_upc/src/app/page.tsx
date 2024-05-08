import { homeData } from "../../public/content/homeData";
import NavBar from "./navBar";
import HeroLayout from "./heroLayout";

export default function Home() {
  return (
    <div className="h-screen w-screen flex-col">
      <NavBar></NavBar>
      <HeroLayout></HeroLayout>
      <p className="absolute">Holaa</p>
    </div>
  );
}

