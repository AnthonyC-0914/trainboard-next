import {getHeadersWithApiKey} from "@/fetchFuncs/header";

export type StationDetails = {
    location:
        { postCode: string, addressLines: string }
}

export async function getStationDetails(crs: string) {
    const data = await fetch(`${process.env["urlBase"]!}stationDetails/${crs}`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        return null
    }

    const stationDetails: StationDetails = await data.json();
    return stationDetails;
}