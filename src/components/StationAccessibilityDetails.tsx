import React from "react";
import {getStationAccessibility, StationAccessibility} from "@/apiFetchFunctions/getStationAccessibility";
import DOMPurify from "isomorphic-dompurify";

export const StationAccessibilityDetails : React.FC<{crs:string}> = async ({crs}) => {
    const {staffHelpAvailable, accessibleTicketMachines, nationalKeyToilets, stepFreeAccess}: StationAccessibility = await getStationAccessibility(crs);

    const sanitisedStaffHelpText: string | undefined = staffHelpAvailable && DOMPurify.sanitize(staffHelpAvailable.generalInfo);
    const sanitisedTicketMachinesInfo: string | undefined = accessibleTicketMachines && DOMPurify.sanitize(accessibleTicketMachines.generalInfo);
    const sanitisedKeyToiletsLocations: string | undefined = nationalKeyToilets && DOMPurify.sanitize(nationalKeyToilets.locationInfo);
    const sanitisedStepFreeAccessInfo: string | undefined = stepFreeAccess && DOMPurify.sanitize(stepFreeAccess.generalInfo);

    return (
        <>
            <div className="rounded-xl border border-red-800 border-solid bg-gray-100 p-2">
                <h1 className="text-xl font-bold"> Accessibility Details </h1>

                {sanitisedStaffHelpText && (
                    <>
                        <strong> Staff Help: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: sanitisedStaffHelpText}} /> <br/>
                    </>
                )}

                {sanitisedTicketMachinesInfo && (
                    <>
                        <strong> Ticket Machines: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: sanitisedTicketMachinesInfo}} /> <br/>
                    </>
                )}

                {sanitisedKeyToiletsLocations && (
                    <>
                        <strong> National Key Toilets: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: sanitisedKeyToiletsLocations}} /> <br/>
                    </>
                )}

                {sanitisedStepFreeAccessInfo && (
                    <>
                        <strong> Step-Free Access: </strong> <br/>
                        <div dangerouslySetInnerHTML={{ __html: sanitisedStepFreeAccessInfo}} />
                    </>
                )}
            </div>
        </>
    )
}