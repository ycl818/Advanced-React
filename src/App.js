import LargeAuthorListItem from "./components/author/LargeAuthorListItem";
import SmallAuthorListItem from "./components/author/SmallAuthorListItem";
import { RegularList } from "./components/lists/Regular";
import { SplitScreen } from "./components/split-screen";
import { authors } from "./data/authors";

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={"Left"} />
        <RightSideComp title={"Right"} />
      </SplitScreen>
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
