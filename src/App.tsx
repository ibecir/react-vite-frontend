import { MouseEvent, useState } from "react";
import ListGroup from "./components/ListGroup";
import { Item } from "./utils/types";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import {
  ContactUsScreen,
  EventsScreen,
  HomeScreen,
  NotFoundScreen,
  TasksScreen,
} from "./pages";
import { Routes, Route } from "react-router-dom";

import { configureAxiosInterceptors } from "./services/appAxios.interceptors";
import { ToastContainer } from "react-toastify";

// https://www.npmjs.com/package/react-toastify
// https://github.com/fkhadra/react-toastify

const handleSelectItem = (item: Item) => {
  console.log("THE APP ITEM IS ", item);
};

function App() {
  configureAxiosInterceptors();
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
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route
          path="/list/item/:headingProp"
          element={<ListGroup items={[]} onSelectItem={handleSelectItem} />}
        />
        <Route path="/calendar" element={<EventsScreen />} />
        <Route path="/tasks" element={<TasksScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      {/* <UsersCallback /> */}
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
