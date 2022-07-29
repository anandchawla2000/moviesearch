import React, { useEffect, useState } from 'react';

const Appcontext= React.createContext();

const Appprovider = ({children}) =>{
    const[loading,setloading]=useState(false);
    const[data,setdata]=useState([]);
    const[name,setname] =useState('avengers')
    const[movieFound,setmovieFound]=useState(true)
    const apimovie= `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_KEY}&s=${name}`
    function setapiname(name){
        setname(name);
    }
    async function getmovies(api){
    try {
       const res = await fetch(api);
        const data = await res.json();
        console.log(data)
        if(data.Response==="True")
        {   if (name) {
            setdata(data.Search)
            setloading(true)
            setmovieFound(true)
        } 
        else{
            setmovieFound(false)
        }
            
        }
        else{
            // setloading(false)
            setmovieFound(false)
        }
    } catch (error) {
        console.log(error)
    }
 }
 useEffect(()=>{
    let time=setTimeout(()=>{
        getmovies(apimovie);
    },2000)
    return ()=>{clearTimeout(time)}
 },[name])
 
 return <Appcontext.Provider value={{loading,data,setapiname,name,movieFound}}>
    {children}
 </Appcontext.Provider>
}


export {Appprovider,Appcontext};