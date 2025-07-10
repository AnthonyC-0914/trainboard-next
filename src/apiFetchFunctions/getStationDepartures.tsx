import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {redirect, RedirectType} from "next/navigation";

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
    const data = await fetch(`${getUrlBase()}liveTrainsBoard/departures`, {
        method: "POST",
        headers: getHeadersWithApiKey(),
        body: JSON.stringify({crs: crs.toUpperCase()}),
    });
    if (!data.ok) {
        redirect('/404', RedirectType.push);
    }

    const stationDepartures: StationDepartures = await data.json();
    return stationDepartures;
}