import { Image } from "@nextui-org/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="w-screen h-3/4 overflow-hidden flex items-center justify-center">
        <Image src="/images/_DSC8685.JPG" alt="Hero Image relative"></Image>
        <div className="absolute w-screen h-1/3 top-2/4 bg-gradient-to-t from-black via-black to-transparent"></div>
        <h1 className="absolute top-[55%] text-center text-9xl font-mono">GORILES UPC</h1>
        <div className="absolute w-[45%] top-3/4 bg-black opacity-70 text-center">
          <p className="text-6xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore veniam quia eligendi, omnis itaque nostrum nemo tenetur id nesciunt necessitatibus temporibus quidem esse ut dolorum quo? Eligendi quos modi odit?</p>
        </div>
      </div>
    </div>
  );
}

