import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Mailbtn({ mailto, label }) {
    return (
        <Link to="#" onClick={(e) => {
            location.href = mailto
            e.preventDefault()

        }}>
            <h1><FontAwesomeIcon icon={faEnvelope} color="rgb(31,41,55)" size="2x"></FontAwesomeIcon></h1>

        </Link>)
}
export default Mailbtn