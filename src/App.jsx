import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import "./App.css";
import Companies from "./component/companies/Companies";
import Residcencies from "./component/Residencies/Residcencies";
import Value from "./component/Value/Value";
import Contact from "./component/Contact/Contact";
import GetStarted from "./component/GetStarted/GetStarted";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Residcencies />
      <Value />
      <Contact/>
      <GetStarted/>
      <Footer />
    </div>
  );
}

export default App;
