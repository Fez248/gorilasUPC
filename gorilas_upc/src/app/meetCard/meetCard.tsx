import { meetData } from "../../../public/content/meetData";

export default function MeetCard({id}: {id: string})
{
    return (
        <div className="bg-white text-black rounded text-sm w-[100px]">
            <p>Nom: {meetData[parseInt(id)].nom}</p>
            <p>Mote: {meetData[parseInt(id)].mote}</p>
        </div>
    );
}
