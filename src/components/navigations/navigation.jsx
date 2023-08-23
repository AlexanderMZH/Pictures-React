
import "./style.css"
const Navigation =({handleSearch}) => {

    return(
        <ul className="nav-ul">
            <li>
                <button onClick={() => {handleSearch("mountains")}}>mountains</button>
            </li>
            <li>
                <button onClick={() => {handleSearch("beatchs")}}>beaches</button>
            </li>
            <li>
                <button onClick={() => {handleSearch("birds")}}>birds</button>
            </li>
            <li>
                <button onClick={() => {handleSearch("food")}}>food</button>
            </li>
        </ul>
    )
}

export default Navigation