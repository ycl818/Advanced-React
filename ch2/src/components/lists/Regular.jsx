export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <div>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
};
