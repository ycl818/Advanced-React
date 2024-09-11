import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";
import { BookInfo } from "./components/book-info";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/1" resourceName="user">
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl="/books/1" resourceName="book">
        <BookInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl="/books/2" resourceName="book">
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
