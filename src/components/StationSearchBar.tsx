'use client';
import React, {useState} from "react";

export const StationSearchBar : React.FC = () => {
    const [userSearchValue, setUserSearchValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserSearchValue(event.currentTarget.value);
    };

    return (
        <div>
            <input
                type="text"
                value={userSearchValue}
                onChange={handleChange}
                className="border border-red-800 w-70 scale-150"
                placeholder="Search for Station CRS/Name"
            />
        </div>
    )
}