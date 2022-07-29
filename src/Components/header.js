import { useContext } from "react";
import { Appcontext } from "./context";

function Header() {
  const { setapiname, name, movieFound } = useContext(Appcontext);

  if (movieFound) {
    return (
      <>
        <div className="headpart displaycolumn">
          <div className="headtitle">
            <h1>Search your favourite Movies</h1>
          </div>
          <div className="headerinput">
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Enter movie name"
                value={name}
                onChange={(e) => {
                  setapiname(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="headpart displaycolumn">
          <div className="headtitle">
            <h1>Search your favourite Movies</h1>
          </div>
          <div className="headerinput">
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="Enter movie name"
                value={name}
                onChange={(e) => {
                  setapiname(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="error">
            <h2>Someting Went wrong... Try another keywords</h2>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
