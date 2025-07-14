'use client'

import React, {useState} from "react";
import {StationIDInfo} from "@/apiFetchFunctions/getAllStations";
import {filterStationsByCRSAndName} from "@/helperFunctions/filterStationsByCRSAndName";
import {SearchStationBox} from "@/components/SearchStationBox";
import Link from "next/link";

export const FareSearch : React.FC<{allStations: StationIDInfo[]}> = ({allStations}) => {
    const [fromStation, setFromStation] = useState('')
    const [toStation, setToStation] = useState('')

    const handleFromStationSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromStation(event.target.value);
    }

    const handleToStationSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToStation(event.target.value);
    }

    const StationSuggestions : React.FC<{
        stationSearch: string
        setStationValue: React.Dispatch<React.SetStateAction<string>>
    }> = ({stationSearch, setStationValue}) => {
        if (stationSearch) {
            const stationsToDisplay: StationIDInfo[] = filterStationsByCRSAndName(allStations, stationSearch);
            return (
                <ul className="border-t-gray-50 cursor-pointer">
                    {stationsToDisplay.map((station) =>
                        <li className="hover:bg-gray-50" key={station.crs} onClick={() => setStationValue(station.crs)}>
                            {station.crs}: {station.name}
                        </li>
                    )}
                </ul>
            )
        }
    }

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="text-center pb-2">
                    <div className="pb-2 text-red-800 font-bold"> FROM </div>
                    <div className="pb-2">
                        <SearchStationBox value={fromStation} onChange={handleFromStationSearch} />
                    </div>
                    <StationSuggestions stationSearch={fromStation} setStationValue={setFromStation} />
                </div>
                <div className="text-center">
                    <div className="pb-2 text-red-800 font-bold"> TO </div>
                    <div className="pb-2">
                        <SearchStationBox value={toStation} onChange={handleToStationSearch} />
                    </div>
                    <StationSuggestions stationSearch={toStation} setStationValue={setToStation} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Link href={`/fare-search/${fromStation}/${toStation}`}>
                    <button className="bg-red-800 hover:bg-red-900 cursor-pointer text-white font-bold rounded py-2 px-4" >
                     Search
                    </button>
                </Link>
            </div>
        </>
    )
}
