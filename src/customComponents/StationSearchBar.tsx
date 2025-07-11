import {useState} from "react";

export default function StationSearchBar() {
    const userInput = () => {
        const [inputValue, setInputValue] = useState('');

    const handleChange = (char) => {
        setInputValue(char.target.value);
    };

    function filterForStation() {
        alert('you got pranked lol')
    }

    return (
        <input type="text" placeholder="Search.." onChange={}/>
    )
}