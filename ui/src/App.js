import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/customer";
import Vendor from "./pages/vendor";
import 'react-notifications/dist/react-notifications.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/customer" element={<Customer />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route exact path="/" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
