import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {notFound} from "next/navigation";

type AllStations = {
    stations: StationIDInfo[]
}

export type StationIDInfo = {
    id: number,
    name: string,
    crs: string
}

export async function getAllStations(): Promise<StationIDInfo[]> {
    const data = await fetch(`${getUrlBase()}stations`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        notFound();
    }

    const stationDetails: AllStations = await data.json();
    stationDetails.stations.sort((station1, station2) => station1.name.localeCompare(station2.name))
    return stationDetails.stations.filter((station) => station.crs);
}