import { getStationDetails } from "../../../../fetchFuncs/getStationDetails";

export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {

    const {crs} = await params;
    const stationDetails = await getStationDetails(crs);

    if (stationDetails === null) {
        return (
            <>
            Error: Station does not exist.
            </>
        )
    }

    return (
        <>
            <div>Welcome to the details page for {crs.toUpperCase()} ({stationDetails.location.addressLines.split("<br>")[0]}).</div>
            <div>Postcode: {stationDetails.location.postCode}.</div>
        </>
    );
}
