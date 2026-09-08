import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import EmiSelection from "./pages/EmiSelection";
import OrderConfirmation from "./pages/OrderConfirmation";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/shop"
              replace
            />
          }
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/product/:id/emi"
          element={<EmiSelection />}
        />

        <Route
          path="/order-confirmation"
          element={<OrderConfirmation />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;