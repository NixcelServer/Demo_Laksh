import "./App.css";


import Footer from "./Components/home/Footer";
import Navbar from "./Components/home/Nav";
import CompanyRegistrationForm from "./Components/company/CompanyRegistrationForm";
import PlywoodProductPage from "./pages/Products/PlywoodProductPage";


import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/adminDashboard" ||
      location.pathname === "/categories" ||
      location.pathname === "/UOM" ||
      location.pathname === "/keywords" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/addNewProduct" ||

      location.pathname === "/AssignSubcategory/:encryptedCategoryId" ||
      
      location.pathname === "/admin" ? (
      


        false
      ) : (
        <Navbar />
      )}


      

      <AllRoutes />

      {location.pathname === "/adminDashboard" ||
      location.pathname === "/categories" ||
      location.pathname === "/UOM" ||
      location.pathname === "/keywords" ||
      location.pathname === "/addProduct" ||
      location.pathname === "/AssignSubcategory/:encryptedCategoryId" ||

      location.pathname === "/addNewProduct" ||
      location.pathname ==="/Dashboard" ||
      location.pathname === "/buyleads" ||
      location.pathname === "/SellerLeftMenu" ||
      location.pathname === "/SellerDashboard" ||
      location.pathname === "/add-products" ||
      location.pathname === "/AssignSubcategory" ||
      location.pathname === "/sell" ||

      location.pathname === "/admin" ? (

        false
      ) : (
        <Footer />
      )}

    </div>
  );
}

export default App;
