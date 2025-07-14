import {StationIDInfo, getAllStations} from "@/apiFetchFunctions/getAllStations";
import React from "react";
import {notFound} from "next/navigation";
import {DepartureTable} from "@/components/DepartureTable";
import { StationAccessibilityDetails } from "@/components/StationAccessibilityDetails";

export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {
    const {crs} = await params;
    const allStations: StationIDInfo[] = await getAllStations();
    const stationName: string | undefined = allStations.find((station) => station.crs === crs)?.name;

    if (stationName === undefined) {
        notFound();
    }

    return (
        <>
            <div className="text-3xl text-red-800 font-bold flex justify-center py-5">{stationName} ({crs.toUpperCase()}) live departures</div>
            <div className="flex">
                <div className="px-30 shrink"> <StationAccessibilityDetails crs={crs} /> </div>
                <div className="pr-30 flex-none"> <DepartureTable crs={crs} /> </div>
            </div>
        </>
    );
}
