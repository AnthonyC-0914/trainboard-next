import {headers} from "@/fetchFuncs/header";

export type AllStations = {
    stations: StationIDInfo[]
}

type StationIDInfo = {
    id: number,
    name: string,
    crs: string
}

export async function getAllStations() {
    const data = await fetch(process.env["urlBase"]! + `stations`, {
        headers: headers,
    });

    if (!data.ok) {
        return null
    }

    const stationDetails: AllStations = await data.json();
    return stationDetails;
}