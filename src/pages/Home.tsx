import ListGroup from "../components/ListGroup";
import { Item } from "../utils/types";
import { cities } from "../constants";

const Home = () => {
  const handleSelectItem = (item: Item) => {
    console.log("THE APP ITEM IS ", item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
};

export default Home;
