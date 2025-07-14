import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {notFound} from "next/navigation";

export type Fares = {
    outboundJourneys: {
        departureTime: string,
        arrivalTime: string,
        primaryTrainOperator: {name: string},
        tickets: {ticketType: string, priceInPennies: number}[]
    }[];
}


export async function fareSearch(fromStation: string, toStation: string): Promise<Fares> {
    const queryParams = `?originStation=${fromStation}&destinationStation=${toStation}&outboundNow=true&numberOfChildren=0&numberOfAdults=1`;

    const data = await fetch(`${getUrlBase()}fares${queryParams}`, {
        headers: getHeadersWithApiKey(),
    });
    console.log(`${getUrlBase()}fares${queryParams}`)
    if (!data.ok) {
        // console.log(data)
        notFound();
    }

    return data.json();
}