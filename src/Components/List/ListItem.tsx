import React from "react";

const ListItem = ({
  snippet,
  contentDetails,
  id,
}: {
  snippet: any;
  contentDetails: any;
  id: string;
}) => {
  const { duration } = contentDetails;
  const { title } = snippet;
  return (
    <div className="list-item">
      {title} - {`${duration.match(/\d+(?=M)/g)}:${duration.match(/\d+(?=S)/g)}`}
    </div>
  );
};

export default ListItem;
