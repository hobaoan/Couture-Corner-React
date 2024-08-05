import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";


function App() {
  return (
    <>
      <h1>COUTURE-CORNER-SHOP</h1>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />

    </>
  );
}

export default App;
