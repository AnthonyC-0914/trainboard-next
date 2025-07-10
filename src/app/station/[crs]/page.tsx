import {getStationDetails, StationDetails} from "@/apiFetchFunctions/getStationDetails";
import {getStationDepartures, StationDepartures} from "@/apiFetchFunctions/getStationDepartures";
import {AllStations, getAllStations} from "@/apiFetchFunctions/getAllStations";
import React from "react";
import {parseISOTime} from "@/helperFunctions/parseISOTime";

export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {
    const {crs} = await params;
    const stationDetails: StationDetails | null = await getStationDetails(crs);
    const stationDepartures: StationDepartures | null = await getStationDepartures(crs);
    const allStations: AllStations | null = await getAllStations();
    const stationName: string = allStations!.stations.find((station) => station.crs === crs)?.name ?? `GHOST STATION`;

    if (stationDetails === null) {
        return (
            <>
            Error: Station does not exist.
            </>
        )
    }

    const DepartureTable : React.FC = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Scheduled Time</th>
                        <th>Destination</th>
                        <th>Platform</th>
                        <th>Status</th>
                        <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                    {stationDepartures?.trainServices.map((departure) =>
                        <tr key={departure.rid}>
                            <td>{parseISOTime(departure.displayScheduledTime)}</td>
                            <td>{departure.destination[0].name} ({departure.destination[0].crs.toUpperCase()})</td>
                            <td>{departure.platform ?? `-`}</td>
                            <td>{departure.status}</td>
                            <td>{departure.trainOperator.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )}

    return (
        <>
            <div>Welcome to the details page for {stationName} Station ({crs.toUpperCase()}).</div>
            <div>Postcode: {stationDetails.location.postCode}.</div>
            <DepartureTable />
        </>
    );
}
