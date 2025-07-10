import {getStationDepartures, StationDepartures} from "@/apiFetchFunctions/getStationDepartures";
import {parseISOtoClockTime} from "@/helperFunctions/parseISOtoClockTime";

export const DepartureTable : React.FC<{crs:string}> = async ({crs}) => {
    const stationDepartures: StationDepartures | null = await getStationDepartures(crs);
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
                    <td>{parseISOtoClockTime(departure.displayScheduledTime)}</td>
                    <td>{departure.destination[0].name} ({departure.destination[0].crs.toUpperCase()})</td>
                    <td>{departure.platform ?? `-`}</td>
                    <td>{departure.status}</td>
                    <td>{departure.trainOperator.name}</td>
                </tr>
            )}
            </tbody>
        </table>
    )}