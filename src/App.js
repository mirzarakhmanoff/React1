import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Service from "./components/our-services/service";
import About from "./components/about-us/about";
import Working from "./components/working/working";
import Testimonals from "./components/testimonals/testimonals";
import Blog from "./components/blog/blog";
import SignUp from "./components/sign/sign";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Service />
      <About />
      <Working />
      <Testimonals />
      <Blog />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
