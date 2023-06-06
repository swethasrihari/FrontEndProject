//import treeImage from "./Images/treesImage.jpeg";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

import Navbar from "./Navigation/Navbar";
export default function App() {
  return (

    <div className="App">
    <div className="App bg-info">

      <div className="row">
        <div className="col">
          <Header />
          <Navbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}
