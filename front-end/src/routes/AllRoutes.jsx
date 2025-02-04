import { Heading } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";


import AddProduct from "../pages/Admin/AddProduct";

import AdminsPage from "../pages/Admin/AdminsPage";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import AssignSubcategory from "../pages/Admin/AssignSubcategory";

import UOM from "../pages/Admin/UOM";





import AdminNavbar from '../Components/AdminNavbar';
import AddAdmin from '../pages/Admin/AddAdmin';
import AddNewMachines from "../pages/Admin/AddNewMachines";
import AddNewProduct from '../pages/Admin/AddNewProduct';



import Home from "../pages/Home";

import Login from "../pages/Login";
import AdminLogin from "../pages/Admin/AdminLogin";
import Sign from "../pages/Sign";

import CompanyRegistrationForm from "../Components/company/CompanyRegistrationForm";

import Sell from '../pages/sell';
import PlywoodProductPage from "../pages/Products/PlywoodProductPage";
import Keywords from "../pages/Admin/Keywords";
import SellerDashboard from "../pages/User/SellerDashboard";
import SellerLeftMenu from "../pages/User/SellerLeftMenu";
import AddProducts from "../pages/Products/AddProducts";
import Buyleads from "../pages/User/Buyleads";
import CompanySetup from "../pages/Company/CompanySetup";

export default function AllRoutes() {
  return (
    <>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/alogin"} element={<AdminLogin />} /> 
        <Route path={"/sign"} element={<Sign />} />
        <Route path={"/plywood"} element={<PlywoodProductPage/>} />
        <Route path="*" element={<Heading h="55vh">Page not found</Heading>} />
        {/* <Route path="/companyregistrationform" element={<CompanyRegistrationForm />} /> */}
        <Route path="/register" element={<CompanyRegistrationForm />} />
        

        <Route
          path="/adminDashboard"
          element={
            <>
              <AdminNavbar />
              <Dashboard />
              {/* <AdminDashboard/> */}
            </>
          }
        />


<Route
          path="/categories"
          element={
            <>
              <AdminNavbar />
              
              <Categories/>
              
            </>
          }
        />


       
        <Route
          path="/AssignSubcategory/:encryptedCategoryId"
          element={
            <>
              <AdminNavbar />
              {/* <Dashboard /> */}
              {/* <Categories/> */}
              {/* <AdminDashboard/> */}
              <AssignSubcategory/>
            </>
          }
        />
        <Route
          path="/UOM"
          element={
            <>
              <AdminNavbar />
              <UOM />
              {/* <AdminDashboard/> */}
            </>
          }
        />
        <Route
          path="/keywords"
          element={
            <>
              <AdminNavbar />
              <Keywords />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar />
              <AdminsPage />
            </>
          }
        />
        <Route
          path="/addAdmin"
          element={
            <>
              <AdminNavbar />
              <AddAdmin />
            </>
          }
        />
        <Route
          path="/addNewProduct"
          element={
            <>
              <AdminNavbar />
              <AddNewProduct />
            </>
          }
        />

        <Route
          path="/add-products"
          element={
            <>
              <SellerLeftMenu />
              < AddProducts/>
            </>
          }
        />

        <Route
          path="/buyleads"
          element={
            <>
              <SellerLeftMenu />
              < Buyleads/>
            </>
          }
        />

        <Route
          path="/company-setup"
          element={
            <>
              <SellerLeftMenu />
              <CompanySetup />
            </>
          }
        />

        <Route />


       
           
            <Route path='/addNewMachines' element={<><AdminNavbar/><AddNewMachines/></>}/><Route />
            <Route path='/sell'element={
            <>
              <SellerDashboard />
              <SellerLeftMenu />
            </>
          } />

      </Routes>
    </>
  );
}
