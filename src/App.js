import { useEffect, useState } from "react";
import "./App.css";
import Mobile from "./components/Mobile/Mobile";
import Pc from "./components/Pc/Pc";
import { getFromLocalStorage } from "./controllers/getFromLocalStorage";
import { nanoid } from "nanoid";

function App() {
  const [Notes, setNotes] = useState([
    {
      id: nanoid(),
      name: "Chat GPT",
      color: "skyblue",
      data: [
        {
          time: "09:30",
          date: "01 January 2023",
          data: "ChatGPT is an AI (Artificial Intelligence) chatbot that generates human-like responses to text input. OpenAI’s ChatGPT has amassed over one million users since it was released to the public on November 30, 2022. OpenAI is an AI research and deployment company. This is an important development for the IAS Exam science and technology section.",
        },
        {
          time: "11:24",
          date: "01 January 2023",
          data: "ChatGPT is based on the powerful GPT 3.5 series of language learning models (LLM)  and interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises and reject inappropriate requests.",
        },
        {
          time: "13:45",
          date: "15 January 2023",
          data: "The difference between search engines and chatbots is that search engines have short-term memory when providing results, whereas chatbots can have persistent, long-term memory as well as provide task execution. ",
        },
      ],
    },
    {
      id: nanoid(),
      name: "MERN stack",
      color: "orange",
      data: [
        {
          time: "04:06",
          date: "02 February 2023",
          data: "MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.",
        },
        {
          time: "05:30",
          date: "04 March 2023",
          data: "Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.",
        },
        {
          time: "09:10",
          date: "15 August 2023",
          data: "The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.",
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
        !getFromLocalStorage() ? (
          <Mobile notes={Notes} setNotes={setNotes} />
        ) : (
          <Mobile notes={getFromLocalStorage()} setNotes={setNotes} />
        )
      ) : !getFromLocalStorage() ? (
        <Pc notes={Notes} setNotes={setNotes} />
      ) : (
        <Pc notes={getFromLocalStorage()} setNotes={setNotes} />
      )}
    </div>
  );
}

export default App;
