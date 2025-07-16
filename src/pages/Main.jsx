import Header from "../components/Header";
import Menu from "../components/Menu";
import Section from "../components/Section";

function Main() {
  return (
    <div className="page-container">
      <Header />
      <Menu />
      <Section
        title="Rules"
        text="Do not feed the llamas coffee. Do not enter the llama cages, these llamas are off-duty. Do not ride the llamas."
      />
    </div>
  );
}

export default Main;
