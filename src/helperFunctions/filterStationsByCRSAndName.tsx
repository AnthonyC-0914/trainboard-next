import {StationIDInfo} from "@/apiFetchFunctions/getAllStations";

export function filterStationsByCRSAndName(allStations: StationIDInfo[], searchValue: string): StationIDInfo[] {
    return allStations.filter((station) =>
            station.crs.startsWith(searchValue.toUpperCase()) ||
            station.name.toUpperCase().startsWith(searchValue.toUpperCase()));
}