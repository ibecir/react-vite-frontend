import { MouseEvent, useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { Item } from "./utils/types";
import { ButtonColors } from "./constants";
import { cities } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RefCounter from "./components/RefCounter";
import InputRef from "./components/InputRef";
import ButtonRef from "./components/ButtonRef";
import Sidebar from "./components/Sidebar";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ContactUsScreen,
  EventsScreen,
  HomeScreen,
  NotFoundScreen,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import CounterMemo from "./components/CounterMemo";
import UsersCallback from "./components/UsersCallback";

// https://www.npmjs.com/package/react-toastify
// https://github.com/fkhadra/react-toastify

const handleSelectItem = (item: Item) => {
  console.log("THE APP ITEM IS ", item);
};

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const handleButtonClick = (event: MouseEvent): void => {
    console.log(event);
    setIsAlertVisible(!isAlertVisible);
  };

  const handleAlertClose = (): void => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route
          path="/list/item/:headingProp"
          element={<ListGroup items={[]} onSelectItem={handleSelectItem} />}
        />
        <Route path="/calendar" element={<EventsScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      {/* <UsersCallback /> */}
      <ToastContainer />
      {/* <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {isAlertVisible && (
        <Alert onClose={handleAlertClose}>
          My Custom Alert Text <span>HTML</span>
        </Alert>
      )}
      <Button color={ButtonColors.danger} onClick={handleButtonClick}>
        Click me
      </Button>
      <Button
        color={ButtonColors.danger}
        onClick={() => toast.warn("Some toast library")}
      >
        Click me
      </Button> */}
    </>
  );
}

export default App;
