import React from "react";
import {getStationDepartures, StationDepartures} from "@/apiFetchFunctions/getStationDepartures";
import {parseISOtoClockTime} from "@/helperFunctions/parseISO";

export const DepartureTable : React.FC<{crs:string}> = async ({crs}) => {
    const stationDepartures: StationDepartures | null = await getStationDepartures(crs);
    return (
        <table className="table-auto border-red-800 text-left">
            <thead className="text-red-800 border">
            <tr>
                <th className="w-25 p-1">Departs</th>
                <th className="w-50">Destination</th>
                <th className="w-25">Platform</th>
                <th className="w-25">Status</th>
                <th className="w-38">Service</th>
            </tr>
            </thead>
            <tbody className="bg-gray-100 border-l border-r border-gray-300">
            {stationDepartures?.trainServices.map((departure) =>
                <tr key={departure.rid} className="text-left border-b-1 border-gray-300 pt-5">
                    <td className="font-bold p-1">{parseISOtoClockTime(departure.displayScheduledTime)}</td>
                    <td>{departure.destination[0].name} ({departure.destination[0].crs.toUpperCase()})</td>
                    <td>{departure.platform ?? `-`}</td>
                    <td>{fixOnTimeStatusText(departure.status)}</td>
                    <td>{departure.trainOperator.name}</td>
                </tr>
            )}
            </tbody>
        </table>
    )}

function fixOnTimeStatusText(status: string) : string {
    if (status === "OnTime") {
        return "On Time";
    }
    return status;
}