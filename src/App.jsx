import "./App.css";
import Layout from "./Layout";
import GetLocation from "./GetLocation";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Location from "./Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Location />} />
          <Route exact path="/local" element={<GetLocation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
