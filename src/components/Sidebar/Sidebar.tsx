import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const handleItemClick = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
        onClick={() => {
          setIsShown(!isShown);
        }}
      >
        <i className="bi bi-list-task"></i>
      </button>
      <div
        className={
          "offcanvas offcanvas-start" +
          (isShown == true ? " fade show" : " hiding")
        }
        tabIndex={-1}
        id="sidebar"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img
              src="https://picsum.photos/200"
              style={{ maxHeight: "100px" }}
              className="rounded-circle"
              alt="Cinque Terre"
            />
          </h5>
          <span>Becir Isakovic</span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => {
              setIsShown(false);
            }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <nav>
            <ul>
              <li>
                <Link onClick={handleItemClick} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleItemClick} to="/calendar">
                  Event Calendar
                </Link>
              </li>
              <li>
                <Link onClick={handleItemClick} to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link onClick={handleItemClick} to="/not-found">
                  Not found page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isShown && (
        <div
          onClick={handleItemClick}
          className="offcanvas-backdrop fade show"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
