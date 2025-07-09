import {AllStations, getAllStations} from "@/fetchFuncs/getAllStations";
import Link from "next/link";

export default async function Home() {

    const allStations: AllStations | null = await getAllStations();

    function stationInfoDiv(id: number, crs: string, stationName: string) {
        if (crs === null) {
            return
        }
        return (
            <>
                <Link href={`/station/${crs}`}> {crs} </Link> : {stationName} <br></br>
            </>
        )
    }

    return (
        <>
            <div className={"w-full text-center bg-red-800"}>
                <h1 className={"text-3xl py-3 text-white"}>TrainBoard</h1>
            </div>
            <div>
                I&apos;m a simple train board, short and lacking innovation.
            <div
                className="">
                {allStations?.stations.map((station) => (
                    stationInfoDiv(station.id, station.crs, station.name)
                ))}
            </div>
            </div>
        </>
    );
}
