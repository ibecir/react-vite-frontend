import ArticleHooks from "./components/ArticleHooks";
import ArticesList from "./components/Articles/ArticesList";
import AxiosArticles from "./components/AxiosArticles";
import UsersList from "./components/Users/UsersList";
import UsersListHooks from "./components/UsersListHooks";

const Home = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm">
            {/* <ArticesList /> */}
            {/* <AxiosArticles /> */}
            {/* <UsersList /> */}
            {/* <ArticleHooks /> */}
            <UsersListHooks />
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
