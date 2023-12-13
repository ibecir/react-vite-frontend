import { MouseEvent, useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { Item } from "./utils/types";
import { ButtonColors } from "./constants";
import { cities } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
      <ListGroup
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
      </Button>
    </>
  );
}

export default App;
