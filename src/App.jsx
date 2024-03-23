import './App.css'
import Credentials from "./Component/Credentials/Credentials";
import Footer from "./Component/Footer/Footer";
import Fragen from "./Component/Fragen/Fragen";
import Header from "./Component/Header/Header";
import Information from "./Component/Information/Information";
import payment from "./assets/payment.png";
function App() {
  return (
    <>
      <Header />

      <Credentials />
      <Information />
      <Fragen />
      <Footer />
    </>
  );
}

export default App;
