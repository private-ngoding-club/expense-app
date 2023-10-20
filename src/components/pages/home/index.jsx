import { BeakerIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import reactLogo from "../../../assets/react.svg";

const Home = () => {
  const [count, setCount] = useState(0);
  const [nameText, setNameText] = useState("");

  useEffect(() => {
    // always run whenever "count" changes
    console.log("run");
  }, [count]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-500">Vite + React</h1>
      <div className="card">
        {nameText && <p>Hi {nameText}</p>}
        <Button
          onClick={() => {
            setCount((count) => count + 1);
            setNameText("Sami");
          }}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
