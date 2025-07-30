import React from "react";
import {getStationDepartures, StationDepartures} from "@/apiFetchFunctions/getStationDepartures";
import {parseISOtoClockTime} from "@/helperFunctions/parseISO";
import {PropagationAPI} from "@opentelemetry/api";

export type Prop = {
    x: string;
    y: number;
}

export const DepartureTable = async ({x, y} : Prop) => {
    const stationDepartures: StationDepartures = await getStationDepartures(crs);
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
            {stationDepartures?.trainServices.map((departure ) =>
                <tr key={departure.rid} className="text-left border-b-1 border-gray-300 pt-5">
                    <td className="font-bold p-1">{parseISOtoClockTime(departure.displayScheduledTime)}</td>
                    <td>{departure.destination[0].name} ({departure.destination[0].crs.toUpperCase()})</td>
                    <td>{departure.platform ?? `-`}</td>
                    <td>{fixStatusText(departure.status)}</td>
                    <td>{departure.trainOperator.name}</td>
                </tr>
            )}
            </tbody>
        </table>
    )}

function fixStatusText(status: string) : string {
    return status.split(/(?<![A-Z])(?=[A-Z])/).join(' ');
}