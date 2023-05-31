import treeImage from "./Images/treesImage.jpeg";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

import Navbar from "./Navigation/Navbar";
export default function App() {
  return (
    <div className="App">
      <Header />
      {/*<img className="bgImage" src={treeImage} alt="Background trees" />*/}
      <Navbar />
      <Footer />
    </div>
  );
}
