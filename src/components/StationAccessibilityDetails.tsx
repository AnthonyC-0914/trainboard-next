import React from "react";
import {getStationAccessibility, StationAccessibility} from "@/apiFetchFunctions/getStationAccessibility";
import DOMPurify from "isomorphic-dompurify";

export const StationAccessibilityDetails : React.FC<{crs:string}> = async ({crs}) => {
    const stationAccessibility: StationAccessibility = await getStationAccessibility(crs);
    const staffHelpText: string = DOMPurify.sanitize(stationAccessibility.staffHelpAvailable.generalInfo);
    const ticketMachinesInfo: string = DOMPurify.sanitize(stationAccessibility.accessibleTicketMachines.generalInfo);
    const keyToiletsLocations: string = DOMPurify.sanitize(stationAccessibility.nationalKeyToilets.locationInfo);
    const stepFreeAccessInfo: string = DOMPurify.sanitize(stationAccessibility.stepFreeAccess.generalInfo);

    return (
        <>
            <div className="rounded-xl border border-red-800 border-solid bg-gray-100 p-2">
                <h1 className="text-xl font-bold"> Accessibility Details </h1>

                <strong> Staff Help: </strong> <br/>
                <div dangerouslySetInnerHTML={{ __html: staffHelpText }} /> <br/>

                <strong> Ticket Machines: </strong> <br/>
                <div dangerouslySetInnerHTML={{ __html: ticketMachinesInfo }} /> <br/>

                <strong> National Key Toilets: </strong> <br/>
                <div dangerouslySetInnerHTML={{ __html: keyToiletsLocations }} /> <br/>

                <strong> Step-Free Access: </strong> <br/>
                <div dangerouslySetInnerHTML={{ __html: stepFreeAccessInfo }} />
            </div>
        </>
    )
}