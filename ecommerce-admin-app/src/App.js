import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import BlogCartList from "./pages/BlogCartList";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AddBlog from "./pages/AddBlog";
import AddBlogCategory from "./pages/AddBlogCategory";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCategory";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog_list" element={<BlogList />} />
          <Route path="blog-category-list" element={<BlogCartList />} />
          <Route path="blog-category" element={<AddBlogCategory />} />

          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-colors" element={<ColorList/>}/>
          <Route path="colors" element={<AddColor/>}/>

          <Route path="list-category" element={<CategoryList/>}/>
          <Route path="add-category" element={<AddCategory/>}/>
          <Route path="brand" element={<AddBrand/>}/>
          <Route path="list-brand" element={<BrandList/>}/>
          <Route path="list-product" element={<ProductList/>}/>
          <Route path="product" element={<AddProduct/>}/>

          <Route path="add-blog" element={<AddBlog/>}/>


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
