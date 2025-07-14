import {getAllStations, StationIDInfo} from "@/apiFetchFunctions/getAllStations";
import {FareSearch} from "@/components/FareSearch";

export default async function FareSearchPage() {

    const allStations: StationIDInfo[] = await getAllStations();

    return (
        <FareSearch allStations={allStations}/>
    )
}