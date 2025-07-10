import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {notFound} from "next/navigation";

export type StationDetails = {
    location:
        { postCode: string, addressLines: string }
}

export async function getStationDetails(crs: string) {
    const data = await fetch(`${getUrlBase()}stationDetails/${crs}`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        notFound();
    }

    const stationDetails: StationDetails = await data.json();
    return stationDetails;
}