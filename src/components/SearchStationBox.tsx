import React from "react";

export const SearchStationBox: React.FC<{value: string, onChange: React.ChangeEventHandler<HTMLInputElement>}> = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            className="border border-red-800 w-70 scale-150"
            placeholder="Search for Station CRS/Name"
        />
    )
}