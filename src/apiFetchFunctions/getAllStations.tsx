import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {notFound} from "next/navigation";

export type AllStations = {
    stations: StationIDInfo[]
}

type StationIDInfo = {
    id: number,
    name: string,
    crs: string
}

export async function getAllStations() {
    const data = await fetch(`${getUrlBase()}stations`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        notFound();
    }

    const stationDetails: AllStations = await data.json();
    return stationDetails;
}