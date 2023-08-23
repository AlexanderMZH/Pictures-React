import { useState } from "react"
import "./style.css"
const Search =({handleSearch}) =>{
    const [inputValue, setInputValue] = useState("")
    
    return (
        <form className="search" onSubmit={(e) => {
            e.preventDefault()
            handleSearch(inputValue)}}>
             <input  type="text" value={inputValue} placeholder="type a name of the picture you want to see" onChange={(e) => {setInputValue(e.target.value)}}/>
             <button type="submit">Search</button>
           
        </form>
    )
}

export default Search