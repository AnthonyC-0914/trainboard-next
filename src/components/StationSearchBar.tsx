'use client';
import React, {useState} from "react";

export const UserInput : React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="border border-red-800 w-70 scale-150"
                placeholder="Search for Station CRS/Name"
            />
        </div>
    )
}