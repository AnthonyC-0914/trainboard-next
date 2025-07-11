import {getHeadersWithApiKey} from "@/apiFetchFunctions/header";
import {getUrlBase} from "@/apiFetchFunctions/getUrlBase";
import {notFound} from "next/navigation";

export type StationAccessibility = {
    staffHelpAvailable?: {
        generalInfo: string,
    },
    accessibleTicketMachines?: {
        generalInfo: string,
    },
    nationalKeyToilets?: {
        locationInfo: string,
    },
    stepFreeAccess?: {
        generalInfo: string
    }
}

type Facilities = {
    facilities: {
        accessibility: {
            staffHelpAvailable: {
                openingTimes: string,
                generalInfo: string,
            },
            inductionLoop: string,
            accessibleTicketMachines: {
                generalInfo: string,
            },
            nationalKeyToilets: {
                locationInfo: string,
            },
            stepFreeAccess: {
                generalInfo: string
            }
        }
    }
}

export async function getStationAccessibility(crs: string): Promise<StationAccessibility> {
    const data = await fetch(`${getUrlBase()}stationDetails/${crs}`, {
        headers: getHeadersWithApiKey(),
    });

    if (!data.ok) {
        notFound();
    }

    const rawFacilitiesData: Facilities = await data.json();
    return rawFacilitiesData.facilities.accessibility;
}