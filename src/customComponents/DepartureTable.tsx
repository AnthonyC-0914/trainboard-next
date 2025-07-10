import {getStationDepartures, StationDepartures} from "@/apiFetchFunctions/getStationDepartures";
import {parseISOtoClockTime} from "@/helperFunctions/parseISO";

export const DepartureTable : React.FC<{crs:string}> = async ({crs}) => {
    const stationDepartures: StationDepartures | null = await getStationDepartures(crs);
    return (
        <table className="table-auto border-red-800 text-left">
            <thead className="text-red-800 border-t-1 border-b-1">
            <tr>
                <th className="w-25">Departs</th>
                <th className="w-100">Destination</th>
                <th className="w-35">Platform</th>
                <th className="w-25">Status</th>
                <th className="w-38">Service</th>
            </tr>
            </thead>
            <tbody className="bg-gray-100 ">
            {stationDepartures?.trainServices.map((departure) =>
                <tr key={departure.rid} className="text-left border-b-1 border-gray-300 pt-5">
                    <td className="font-bold pt-3 pb-3">{parseISOtoClockTime(departure.displayScheduledTime)}</td>
                    <td>{departure.destination[0].name} ({departure.destination[0].crs.toUpperCase()})</td>
                    <td>{departure.platform ?? `No platform yet`}</td>
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