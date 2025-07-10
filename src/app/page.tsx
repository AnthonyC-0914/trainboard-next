import {AllStations, getAllStations} from "@/apiFetchFunctions/getAllStations";
import Link from "next/link";
import React from "react";

export default async function Home() {

    const allStations: AllStations | null = await getAllStations();

    const  StationInfo : React.FC<{crs:string, name:string}> =({crs, name}) => {
        if (crs === null) {
            return;
        }
        return (
            <>
                <Link href={`/station/${crs}`}> {crs} </Link> : {name} <br></br>
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
            <div>
                {allStations?.stations.map((station) => (
                    <StationInfo key={station.id} crs={station.crs} name={station.name} />)
                )}
            </div>
            </div>
        </>
    );
}
