import Link from "next/link";

export const StationInfo : React.FC<{crs:string, name:string}> =({crs, name}) => {
    if (crs === null) {
        return;
    }
    return (
        <>
            <Link href={`/station/${crs}`}> {crs} </Link> : {name} <br/>
        </>
    )
}