export type AllStations = {
    stations: StationIDInfo[]
}

type StationIDInfo = {
    id: number,
    name: string,
    crs: string
}

export async function getAllStations() {
    const headers = new Headers();
    headers.set('X-Api-Key', process.env["X-Api-Key"]!);

    const data = await fetch(process.env["urlBase"]! + `stations`, {
        headers: headers,
    });

    if (!data.ok) {
        return null
    }

    const stationDetails: AllStations = await data.json();
    return stationDetails;
}