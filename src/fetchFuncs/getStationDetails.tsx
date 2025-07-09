export type stationDetails = {
    location:
        { postCode: string, addressLines: string }
}

export async function getStationDetails(crs: string) {
    const headers = new Headers();
    headers.set('X-Api-Key', process.env["X-Api-Key"]!);

    const data = await fetch(process.env["urlBase"]! + `stationDetails/${crs}`, {
        headers: headers,
    });

    if (!data.ok) {
        return null
    }

    const stationDetails: stationDetails = await data.json();
    return stationDetails;
}