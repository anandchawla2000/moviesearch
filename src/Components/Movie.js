import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Appcontext } from "./context"


function Movie () {
    const {loading,data,movieFound}=useContext(Appcontext)
    if(loading===false)
    {
        return(
            <div className="Loading">
            <h1>Loading....</h1>
            </div>
        )
    }
    
    else if (loading===true && movieFound===true){
    return(
        <div className="grid movielist">
            {data.map((currvalue)=>{
                return(
                    <NavLink to={`movie/${currvalue.imdbID}`} id={currvalue.imdbID}>
                    <div className="card">
                    <div className="carddata">
                    <h2>{currvalue.Title}</h2>
                    <img alt="movie" src={`${currvalue.Poster}`}/>
                    </div>
                    </div>
                    </NavLink>
                )
            })}
        </div>
    )
    }
}

export default Movie