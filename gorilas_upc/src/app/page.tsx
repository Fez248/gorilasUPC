import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-screen h-3/4 overflow-hidden flex items-center">
        <Image src="images/_DSC8685.JPG" alt="Hero Image relative"></Image>
        <div className="absolute w-screen h-1/3 top-2/4 bg-gradient-to-t from-black via-black to-transparent"></div>
      </div>
      <div>
        <h1 className="text-4xl text-center">Gorilas UPC</h1>
        <p className="text-center">Rugby Team Gorilas UPC</p>
      </div>
    </div>
  );
}

