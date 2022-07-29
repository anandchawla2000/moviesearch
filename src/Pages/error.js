
import Goback from "../Components/Gobackbutton";
function Error() {
  return (
    <>
      <div className="errorpage">
        <div className="errorcard">
          <h2>404 Not Page found</h2>
        </div>
        <Goback/>
      </div>
    </>
  );
}

export default Error;
