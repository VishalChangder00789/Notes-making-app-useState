import { useEffect, useState } from "react";
import "./App.css";
import Mobile from "./components/Mobile/Mobile";
import Pc from "./components/Pc/Pc";

function App() {
  const [Notes, setNotes] = useState([
    {
      id: "211156",
      name: "Bishal Changder",
      color: "skyblue",
      data: [
        {
          time: "11:24",
          date: "31 December 2023",
          data: "Reserver Category",
        },
        {
          time: "11:24",
          date: "31 December 2023",
          data: "Reserver Category",
        },
        {
          time: "11:24",
          date: "31 December 2023",
          data: "Reserver Category",
        },
      ],
    },
    {
      id: "785156456",
      name: "Deepthi Anivala",
      color: "orange",
      data: [
        {
          time: "04:06",
          date: "31 December 2023",
          data: "Dams and social darvins",
        },
        {
          time: "04:06",
          date: "31 December 2023",
          data: "Dams and social darvins",
        },
        {
          time: "04:06",
          date: "31 December 2023",
          data: "Dams and social darvins",
        },
      ],
    },
  ]);

  const [width, setWidth] = useState(window.innerWidth);

  const handleScreenSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <div className="App">
      {width <= 450 ? (
        <Mobile notes={Notes} setNotes={setNotes} />
      ) : (
        <Pc notes={Notes} setNotes={setNotes} />
      )}
    </div>
  );
}

export default App;
