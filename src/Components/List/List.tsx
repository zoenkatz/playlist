import React from "react";
import ListItem from "./ListItem";

const List = ({ listData }: { listData: [] }) => {
  return (
    <div className="list">
      {listData &&
        listData.map((listItem: { id: string; items: any }) => {
          const { items, id } = listItem;
          const { snippet, contentDetails } = items[0];
          return <ListItem key={id} snippet={snippet} contentDetails={contentDetails} id={id} />;
        })}
    </div>
  );
};

export default List;
