// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <img
        src="src/img/llamacoffee.png"
        height="300px"
        alt="the llama coffee logo"
      ></img>
      <Section
        title="About Us"
        text="Marley's Cafe began in 2023 with a dream and a GoFundMe. It turns out that a lot of people want to experience the feeling of drinking coffee while surrounded by llamas! We are currently the first and only llama cafe in all of Germany. The llamas are all rescues."
      />
      <Section
        title="Rules"
        text="Do not feed the llamas coffee. Do not enter the llama cages, these llamas are off-duty. Do not ride the llamas."
      />
      <Contact />
    </>
  );
}

export default App;
