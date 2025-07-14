'use client'

import {StationSearchBar} from "@/components/StationSearchBar";
import {AllStations} from "@/apiFetchFunctions/getAllStations";
import {StationInfo} from "@/components/StationInfo";

export const StationsDisplay: React.FC<{allStations: AllStations}> = ({allStations}) => {

    return (
        <>
            <div className="flex justify-center py-1">
                <StationSearchBar />
            </div>
            <div>
                {allStations?.stations.map((station) => (
                    <StationInfo key={station.id} crs={station.crs} name={station.name} />)
                )}
            </div>
        </>
        )
}