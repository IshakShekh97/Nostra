import Hero from "./components/landing-page/Hero";
import Navbar from "./components/landing-page/Navbar";
import Footer from "./components/landing-page/parts/Footer";
import Topbar from "./components/landing-page/Topbar";
import { ThemeSwitcher } from "./components/theme-components/ThemeSwitcher";

const App = () => {
  return (
    <div className="font-recurse">
      <ThemeSwitcher className="fixed bottom-10 right-10 max-lg:hidden" />
      <Topbar />
      <Navbar />
      <div className="px-3 pt-5 mx-auto sm:px-10 md:px-14 lg:px-20 max-w-screen-[1600px] ">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default App;
