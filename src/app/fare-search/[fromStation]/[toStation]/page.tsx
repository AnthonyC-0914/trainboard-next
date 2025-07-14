import {Fares, fareSearch} from "@/apiFetchFunctions/fareSearch";
import {parseISOtoClockTime} from "@/helperFunctions/parseISO";
import React from "react";

export default async function TicketsPage(
    {params}: {params: Promise<{fromStation: string, toStation: string}>})
{
    const {fromStation, toStation} = await params;

    const fares: Fares = await fareSearch(fromStation, toStation);

    return (
        <table className="table-auto border-red-800 text-left">
            <thead className="text-red-800 border">
            <tr>
                <th className="w-25 p-1">Departs</th>
                <th className="w-50">Arrives</th>
                <th className="w-25">Operator</th>
                <th className="w-25">Ticket Type</th>
                <th className="w-38">Ticket Price</th>
            </tr>
            </thead>
            <tbody className="bg-gray-100 border-l border-r border-gray-300">
            {fares?.outboundJourneys.map((fare) =>
                <tr key={0} className="text-left border-b-1 border-gray-300 pt-5">
                    <td className="font-bold p-1">{parseISOtoClockTime(fare.departureTime)}</td>
                    <td className="font-bold p-1">{parseISOtoClockTime(fare.arrivalTime)}</td>
                    <td>{fare.primaryTrainOperator.name}</td>
                    <td>not done</td>
                    <td>not done</td>
                </tr>
            )}
            </tbody>
        </table>
    )

}