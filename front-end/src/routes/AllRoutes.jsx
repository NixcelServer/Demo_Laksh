import { Heading } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";


import AddProduct from "../pages/Admin/AddProduct";

import AdminsPage from "../pages/Admin/AdminsPage";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";

import UOM from "../pages/Admin/UOM";





import AdminNavbar from '../Components/AdminNavbar';
import AddAdmin from '../pages/Admin/AddAdmin';
import AddNewMachines from "../pages/Admin/AddNewMachines";
//import AddNewProduct from '../pages/Admin/AddNewProduct';



import Home from "../pages/Home";

import Login from "../pages/Login";
import AdminLogin from "../pages/Admin/AdminLogin";
import Sign from "../pages/Sign";

import CompanyRegistrationForm from "../Components/company/CompanyRegistrationForm";

import Sell from '../pages/sell';
import PlywoodProductPage from "../pages/Products/PlywoodProductPage";
import Keywords from "../pages/Admin/Keywords";
import MainPage from "../Components/sell/mainPage/MainPage";
//import AddNewProduct from "../Components/product/addnewproduct"
import AddNewProduct from "../Components/product/addnewproduct";

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
        <Route path="/addnewproduct" element={<AddNewProduct />} />
       

        
        

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
       path="/sell"
       element={
        <>
          <AdminNavbar />
          <Sell/>
          </>
       }
       />
       
        <Route
          path="/categories"
          element={
            <>
              <AdminNavbar />
              {/* <Dashboard /> */}
              <Categories/>
              {/* <AdminDashboard/> */}
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
        {/* <Route
          path="/addnewP\product"
          element={
            <>
              <AdminNavbar />
              <AddNewProduct />
            </>
          }
        /> */}

        <Route />


       
           
            <Route path='/addNewMachines' element={<><AdminNavbar/><AddNewMachines/></>}/><Route />
            <Route path='/sell' element={<Sell/>} />

      </Routes>
    </>
  );
}
