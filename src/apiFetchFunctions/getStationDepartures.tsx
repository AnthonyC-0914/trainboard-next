import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";

export type StationDepartures = {
    trainServices: {
        rid: string,
        platform?: string,
        trainOperator: {name: string},
        destination: {crs: string, name: string}[],
        status: string,
        displayScheduledTime: string
    }[]
}

export async function getStationDepartures(crs: string) {
    const data = await fetch(`${process.env["urlBase"]!}liveTrainsBoard/departures`, {
        method: "POST",
        headers: getHeadersWithApiKey(),
        body: JSON.stringify({crs: crs.toUpperCase()}),
    });
    if (!data.ok) {
        return null;
    }

    const stationDepartures: StationDepartures = await data.json();
    console.log(stationDepartures);
    return stationDepartures;
}