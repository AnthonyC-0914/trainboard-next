import {AllStations, getAllStations} from "@/apiFetchFunctions/getAllStations";
import Link from "next/link";
import {StationSearchBar} from "@/components/StationSearchBar"

export default async function Home() {

    const allStations: AllStations = await getAllStations();

    const StationInfo : React.FC<{crs:string, name:string}> =({crs, name}) => {
        if (crs === null) {
            return;
        }
        return (
            <>
                <Link href={`/station/${crs}`}> {crs} </Link> : {name} <br/>
            </>
        )
    }

    return (
        <>
            <div className="text-3xl text-red-800 font-bold flex justify-center py-5">
                Welcome to the homepage of the Definitely Not LNER Trainboard (TM).
            </div>
            <div className="font-bold flex justify-center py-5">
                This homepage is quite &lsquo;minimalistic&rsquo;; please search for a station. <br/>
            </div>
            <div className="flex justify-center py-1">
                <StationSearchBar />
            </div>
            <div>
                {allStations?.stations.map((station) => (
                    <StationInfo key={station.id} crs={station.crs} name={station.name} />)
                )}
            </div>
        </>
    );
}
