import Sample from "./sample";
import { ResizeGroup } from "@fluentui/react";
import React from 'react';

function onReduceScalingData(data) {
  console.log("Something")
  return {
    scalingIndex: data.scalingIndex - 1,
  };
}

function App() {
  const initialData = { content: 5 };

  const renderedDataId = "onRenderDataId";

  const onRenderData = (data) => (
    <Sample id={renderedDataId}> Rendered data: {data.content}</Sample>
  );
  
  return (
    <ResizeGroup
      data={initialData}
      onReduceData={onReduceScalingData}
      onRenderData={onRenderData}
      className={"TestClassName"}
    />
  );
}

export default App;
