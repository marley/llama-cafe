import Header from "../components/Header";
import Menu from "../components/Menu";
import Section from "../components/Section";

function Main() {
  return (
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2"></div>
        <div class="col-md-auto">
          <div className="page-container ">
            <Header />
            <img
              src="src/img/luis-de-leon-GUdw4u8cNCc-unsplash.jpg"
              width="100%"
            />
            <Menu />
            <Section
              title="Rules"
              text="Do not feed the llamas coffee. Do not enter the llama cages, these llamas are off-duty. Do not ride the llamas."
            />
          </div>
        </div>
        <div class="col col-lg-2"></div>
      </div>
    </div>
  );
}

export default Main;
