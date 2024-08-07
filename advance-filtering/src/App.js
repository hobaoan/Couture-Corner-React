import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";

function App() {
  return (
    <>
      <h1>Coutur Corner Shop </h1>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />

    </>
  );
}

export default App;
