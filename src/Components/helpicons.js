import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Helpicons = () => {
  return (
    <NavLink to='/about'>
    <div className="helpicon">
     <FontAwesomeIcon icon={faCircleQuestion} size='5x' />
     </div>
    </NavLink>
  );
};

export default Helpicons;
