export default async function stationPage(
    {params}: {params: Promise<{ crs: string }>}) {
    const {crs} = await params;
    return (
        <>
            Welcome to the details page for {crs}
        </>
    );
}
