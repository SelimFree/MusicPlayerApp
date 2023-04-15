import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isOpened, setIsOpened }) => {
    //Handlers
    const openLibraryHandler = () => {
        setIsOpened(!isOpened);
    };

    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={openLibraryHandler}>
                Library
                <FontAwesomeIcon className="library-btn" icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
