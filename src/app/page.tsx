import {StationIDInfo, getAllStations} from "@/apiFetchFunctions/getAllStations";
import {StationsDisplay} from "@/components/StationsDisplay";

export default async function Home() {

    const allStations: StationIDInfo[] = await getAllStations();

    return (
        <>
            <div className="text-3xl text-red-800 font-bold flex justify-center py-5">
                Welcome to the homepage of the Definitely Not LNER Trainboard (TM).
            </div>
            <div className="font-bold flex justify-center py-5">
                This homepage is quite &lsquo;minimalistic&rsquo;; please search for a station. <br/>
            </div>
            <StationsDisplay allStations={allStations} />
        </>
    );
}
