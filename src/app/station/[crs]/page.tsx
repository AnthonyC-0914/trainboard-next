import {getStationDetails, StationDetails} from "@/apiFetchFunctions/getStationDetails";
import {AllStations, getAllStations} from "@/apiFetchFunctions/getAllStations";
import React from "react";
import {DepartureTable} from "@/customComponents/departureTable";

export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {
    const {crs} = await params;
    const stationDetails: StationDetails = await getStationDetails(crs);
    const allStations: AllStations = await getAllStations();
    const stationName: string | undefined = allStations.stations.find((station) => station.crs === crs)?.name;

    return (
        <>
            <div>Welcome to the details page for {stationName} Station ({crs.toUpperCase()}).</div>
            <div>Postcode: {stationDetails.location.postCode}.</div>
            <DepartureTable crs={crs} />
        </>
    );
}
