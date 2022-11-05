import "./App.css";
import Clients from "./components/clients/clients";
// import Bid from "./components/bid/bid";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from './components/main/main'
import Price from "./components/price/price";
import Services from "./components/services/services";
import Slogan from "./components/slogan/slogan";

function App() {
  return (
    <div className="">
      <Header/>
      <Main/>
      <Services/>
      <Slogan/>
      <Price/>
      {/* <Bid/> */}
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
