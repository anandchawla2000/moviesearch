import { NavLink } from "react-router-dom"
const Goback = () => {
  return (
    <>
      <div className="gobckbuuton">
        <NavLink to="/">
          <button type="button">GO BACK</button>
        </NavLink>
      </div>
    </>
  );
};

export default Goback;
