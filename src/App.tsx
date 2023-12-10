import Alert from "./components/Alert/Alert";
import ListGroup from "./components/ListGroup";
import { Item } from "./utils/types";

const cities: Item[] = [
  { id: 1, name: "Sarajevo", population: 500_000 },
  { id: 2, name: "Tuzla", population: 350_000 },
  { id: 3, name: "Banja Luka", population: 300_000 },
];

const handleSelectItem = (item: Item) => {
  console.log("THE APP ITEM IS ", item);
};

function App() {
  return (
    <>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        My Custom Alert Text <span>HTML</span>
      </Alert>
    </>
  );
}

export default App;
