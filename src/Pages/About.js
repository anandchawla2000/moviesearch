import Goback from "../Components/Gobackbutton"

function About(){
    return(
        <div className="containeras">
            <div className="Aboutcard">
                <div className="Aboutheading">
                <h1>About Us</h1>
                <hr></hr>
                </div>
                <div className="Aboutpara">
                <p>
                This is a React app to search you favourite movie.
                </p>
                </div>
                <p className="anand">- Anand Chawla</p>
                <Goback/>
            </div>
        </div>
    )
}

export default About