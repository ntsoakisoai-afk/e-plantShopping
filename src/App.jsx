import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="company-name">
          Paradise Nursery
        </h1>

        <p className="company-description">
          Welcome to Paradise Nursery, your trusted destination
          for beautiful indoor plants, tropical plants, and
          succulents. Discover a wide selection of plants that
          bring life, beauty, and freshness into your home and
          workspace.
        </p>

        <AboutUs />

        <Link
          to="/plants"
          className="get-started-btn"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/plants"
        element={<ProductList />}
      />

      <Route
        path="/cart"
        element={<CartItem />}
      />
    </Routes>
  );
}

export default App;