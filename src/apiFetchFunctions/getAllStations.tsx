import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {redirect, RedirectType} from "next/navigation";

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
        redirect('/404', RedirectType.push);
    }

    const stationDetails: AllStations = await data.json();
    return stationDetails;
}