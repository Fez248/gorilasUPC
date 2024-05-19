import "../../public/style/style.css";
import MapField from "./map/mapField";

export default function Home2() {
    return (
        <div className="bg-heroImage2 h-screen w-screen bg-cover bg-center">
            <div className="absolute h-screen w-screen bg-black opacity-[0.4] pointer-events-none">
            </div>
            <div className="wrapper h-screen">
                <nav className="navbar flex justify-around mt-[1%] font-rubik">
                    <p>Holaa</p>
                    <a className="text-2xl" href="#section2">VULL ENTRENAR</a>
                    <p>Adios</p>
                </nav>
                <div className="overflow-hidden z-10 element1">
                    <span className="text-[#ffffff] font-bebas-neue">
                        <span className="title" id="l1">G</span>
                        <span className="title" id="l2">O</span>
                        <span className="title" id="l3">R</span>
                        <span className="title" id="l4">I</span>
                        <span className="title" id="l5">L</span>
                        <span className="title" id="l6">A</span>
                        <span className="title" id="l7">S</span>
                    </span>
                    <span className="text-[#166BCB] font-bebas-neue">
                        <span className="title" id="l8">U</span>
                        <span className="title" id="l9">P</span>
                        <span className="title" id="l10">C</span>
                    </span>
                </div>
                <div className="overflow-hidden z-10 element1">
                    <span className="text-[#ee7c31] font-bebas-neue">
                        <span className="title2" id="l11">R</span>
                        <span className="title2" id="l12">U</span>
                        <span className="title2" id="l13">G</span>
                        <span className="title2" id="l14">B</span>
                        <span className="title2" id="l15">Y</span>
                    </span>
                    <span className="text-[#ffffff] font-bebas-neue">
                        <span className="title2" id="l16">U</span>
                        <span className="title2" id="l17">P</span>
                        <span className="title2" id="l18">C</span>
                    </span>
                </div>
            </div>
            <section className="h-screen">

            </section>
            <section id="section2" className="flex gap-x-[5%] h-screen bg-[#232324]">
                <div id="map" className="location rounded">
                    <MapField></MapField>
                </div>
                <div className="flex-col mt-[5%] font-rubik text-balance w-[50%] mr-[10%]">
                    <p className="text-6xl">Vols Entrenar?</p>
                    <p className="text-md mt-[5%]">Tothom és benvingut, siguis de la universitat que siguis, estudiïs el que estudiïs, siguis d'aquí o estiguis d'Erasmus,
                    siguis un samoano de 120 kg o mai hagis jugat a rugby, tothom és benvingut a formar part de la família Goril·les UPC.
                    T'esperem al camp del Sitari d'Esports UB: <br></br> Av. Diagonal, 695, Les Corts, 08028 Barcelona</p>
                </div>
            </section>
        </div>
    );
}