'use client'

import {StationIDInfo} from "@/apiFetchFunctions/getAllStations";
import {StationInfo} from "@/components/StationInfo";
import React, {useEffect, useState} from "react";

export const StationsDisplay: React.FC<{allStations: StationIDInfo[]}> = ({allStations}) => {
    const [userSearchValue, setUserSearchValue] = useState('');
    const [stationsToDisplay, setStationsToDisplay] = useState<StationIDInfo[]>(allStations);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserSearchValue(event.target.value);
    }

    useEffect(() => {
        setStationsToDisplay(allStations.filter((station) => station.crs.startsWith(userSearchValue.toUpperCase())));
    }, [userSearchValue, allStations]);

    return (
        <>
            <div className="flex justify-center py-1">
                    <input
                        type="text"
                        value={userSearchValue}
                        onChange={handleChange}
                        className="border border-red-800 w-70 scale-150"
                        placeholder="Search for Station CRS/Name"
                    />
            </div>
            <div>
                {stationsToDisplay.map((station) => (
                    <StationInfo key={station.id} crs={station.crs} name={station.name} />)
                )}
            </div>
        </>
        )
}