import Banner from "./components/banner";
import Clients from "./components/clients";
import Contact from "./components/contact";
import Explanation from "./components/explanation";
import Our_clients from "./components/our_clients";
import Our_services from "./components/our_services";
import Slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Banner />
      <Our_services />
      <Explanation/>
      <Slider/>
      <Our_clients/>
      <Clients/>
      <Contact/>
      <footer>
        <p>Comercial LT</p>
        <p>Site Developer E-mail: conradogob07@gmail.com</p>
        <a href="https://www.flaticon.com/br/icones-gratis/carro" title="carro ícones">ícones criados por Creatype - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
