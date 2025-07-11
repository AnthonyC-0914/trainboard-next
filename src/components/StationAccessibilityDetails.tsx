import React from "react";
import {getStationAccessibility, StationAccessibility} from "@/apiFetchFunctions/getStationAccessibility";
import DOMPurify from "isomorphic-dompurify";

export const StationAccessibilityDetails : React.FC<{crs:string}> = async ({crs}) => {
    const {staffHelpAvailable, accessibleTicketMachines, nationalKeyToilets, stepFreeAccess}: StationAccessibility = await getStationAccessibility(crs);

    const staffHelpText: string | undefined = staffHelpAvailable && DOMPurify.sanitize(staffHelpAvailable.generalInfo);
    const ticketMachinesInfo: string | undefined = accessibleTicketMachines && DOMPurify.sanitize(accessibleTicketMachines.generalInfo);
    const keyToiletsLocations: string | undefined = nationalKeyToilets && DOMPurify.sanitize(nationalKeyToilets.locationInfo);
    const stepFreeAccessInfo: string | undefined = stepFreeAccess && DOMPurify.sanitize(stepFreeAccess.generalInfo);

    return (
        <>
            <div className="rounded-xl border border-red-800 border-solid bg-gray-100 p-2">
                <h1 className="text-xl font-bold"> Accessibility Details </h1>

                {staffHelpText && (
                    <>
                        <strong> Staff Help: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: staffHelpText}} /> <br/>
                    </>
                )}

                {ticketMachinesInfo && (
                    <>
                        <strong> Ticket Machines: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: ticketMachinesInfo}} /> <br/>
                    </>
                )}

                {keyToiletsLocations && (
                    <>
                        <strong> National Key Toilets: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: keyToiletsLocations}} /> <br/>
                    </>
                )}

                {stepFreeAccessInfo && (
                    <>
                        <strong> Step-Free Access: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: stepFreeAccessInfo}} />
                    </>
                )}
            </div>
        </>
    )
}