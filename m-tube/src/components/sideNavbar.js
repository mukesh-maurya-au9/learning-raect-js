import { FaMusic, FaGamepad, FaFutbol, FaHome, FaFilm, FaGripfire, FaMastodon, FaHistory, FaBuffer, FaReadme, FaUserShield } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div className="fixedSide">
            <div className="sidediv1">
                <Link to="/"><FaHome /> Home</Link><br/>
                <Link to="/trending"><FaGripfire /> Trending</Link><br/>
                <Link to="/"><FaMastodon /> Subscription</Link><br/>
                <Link to="/"><FaBuffer /> Library</Link><br/>
                <Link to="/"><FaHistory /> History</Link><br/>
            </div><hr/>
            <div className="sidediv1">
                <button><FaUserShield/>Sign In</button><br/>
            </div><hr/>
            <ul className="sidediv1">
                <label className="best">Best Of M-Tube</label><br/>
                <Link to="/"><FaMusic /> Music</Link><br/>
                <Link to="/"><FaFutbol /> Sport</Link><br/>
                <Link to="/"><FaGamepad /> Gaming</Link><br/>
                <Link to="/"><FaFilm /> Films</Link><br/>
                <Link to="/"><FaReadme/> Policy</Link><br/>
            </ul>
        </div>
    )
};
export default SideNavbar;