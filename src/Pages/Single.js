import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
import Goback from "../Components/Gobackbutton";
import Error from "./error";

function Single(){
    const {id}=useParams();
    const [loading,setloading]=useState(false);
    const [poster,notposter]=useState(true)
    const [data,setdata]=useState({});
    async function moviedetails(id){
        try {
            const res=  await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`)
            const data = await res.json()
            console.log(data)
            if(data.Poster==="N/A"){
                console.log('incorrect id')
                notposter(false)
            }
            else if(data.Response==="False"){
                setloading(false)
            }
            else{
                setdata(data)
                setloading(true)
            }
        } catch (error) {
            console.log("error")
        }
        
    }
    
    useEffect(()=>{
        moviedetails(id);
    },[])
    if(poster===false) {
       return( <Error/> ) }
    
    else if(loading===false){
        return <>
            <div className="Loading">
            <h1>Loading....</h1>
            </div>
        </>
    }
    else{
        return(
            <div className="singledata">
            <div className="single">
                <div className="single_card">
                    <div className="leftdata">
                        <img src={`${data.Poster}`} alt={`${data.Title}`}/>
                    </div>
                    <div className="rightdata">
                        <h2>{data.Title}</h2>
                        <div className="innerrightdata">
                        <p>{data.Released}</p>
                        <p>{data.Genre}</p>
                        <p>{data.Language}</p>
                        <p>{data.Ratings[0].Value}</p>
                        </div>
                        <Goback/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Single