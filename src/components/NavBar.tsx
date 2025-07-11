import React from "react";
import Link from "next/link";

export const NavBar : React.FC = () => {
    const date = new Date(Date.now()).toDateString();
    return (
        <div className={"flex justify-between items-center bg-red-800 py-3 font-sans"}>
            <div className="float-left">
                <Link href='/' className={"text-3xl py-3 text-white pl-5 text-left"}>DefNotLNERBoard</Link>
            </div>
            <div className="text-white float-right pr-3">
                {date}
            </div>
        </div>
    )
}