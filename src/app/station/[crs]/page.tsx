import { getStationDetails } from "../../../../fetchFuncs/getStationDetails";

export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {

    const {crs} = await params;
    const stationDetails = await getStationDetails(crs);
    console.log(stationDetails)

    return (
        <>
            <div>Welcome to the details page for {crs}.</div>
            <div>Postcode: {stationDetails.location.postCode}.</div>   
        </>
    );
}
