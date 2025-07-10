import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {redirect, RedirectType} from "next/navigation";

export type StationDetails = {
    location:
        { postCode: string, addressLines: string }
}

export async function getStationDetails(crs: string) {
    const data = await fetch(`${getUrlBase()}stationDetails/${crs}`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        redirect('/404', RedirectType.push);
    }

    const stationDetails: StationDetails = await data.json();
    return stationDetails;
}