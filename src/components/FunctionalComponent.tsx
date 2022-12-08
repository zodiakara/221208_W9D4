import { useState } from "react";

interface FunctionalComponentProps {
  subTitle: string;
  count: number;
  customClassName?: string;
}

const FunctionalComponent = ({
  subTitle,
  count,
  customClassName,
}: FunctionalComponentProps) => {
  const [selectedName, setSelectedName] = useState("Agata");

  return (
    <div>
      <h1 className={customClassName}>this is a function component</h1>
      <h2>{subTitle}</h2>
      <p>{count}</p>
      <h3
        onClick={() => {
          setSelectedName(selectedName === "Agata" ? "Deny" : "Agata");
        }}
      >
        {" "}
        {selectedName}
      </h3>
    </div>
  );
};

export default FunctionalComponent;
