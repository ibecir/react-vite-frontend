import ArticesList from "./components/Articles/ArticesList";
import AxiosArticles from "./components/AxiosArticles";
import UsersList from "./components/Users/UsersList";

const Home = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm">
            {/* <ArticesList /> */}
            {/* <AxiosArticles /> */}
            <UsersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* 
      const handleSelectItem = (item: Item) => {
        console.log("THE APP ITEM IS ", item);
      };
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */
}
