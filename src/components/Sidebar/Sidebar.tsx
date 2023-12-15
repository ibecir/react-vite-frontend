import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <button
        className="btn btn-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
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
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
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
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <ul>
              <li>
                <Link
                  onClick={() => {
                    setIsShown(!isShown);
                  }}
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsShown(!isShown);
                  }}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsShown(!isShown);
                  }}
                  to="/not-found"
                >
                  Not found page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isShown && (
        <div
          onClick={() => {
            setIsShown(!isShown);
          }}
          className="offcanvas-backdrop fade show"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
