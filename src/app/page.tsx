import {AllStations, getAllStations} from "@/apiFetchFunctions/getAllStations";
import Link from "next/link";
import React from "react";

export default async function Home() {

    const allStations: AllStations = await getAllStations();

    const StationInfo : React.FC<{crs:string, name:string}> =({crs, name}) => {
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
        <div>
            {allStations?.stations.map((station) => (
                <StationInfo key={station.id} crs={station.crs} name={station.name} />)
            )}
        </div>
    );
}
