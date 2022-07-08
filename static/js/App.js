
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./Home.js";
import Investors from "./investors.js";
import Foundation from "./foundation";


function App() {
  return (

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="investors" element={<Investors />} />
      <Route path="foundation" element={<Foundation />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;