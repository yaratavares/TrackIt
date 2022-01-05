import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLogin from "./PageLogin";
import PageRegistration from "./PageRegistration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/cadastro" element={<PageRegistration />} />
        {/* <Route path="/habitos" element={} />
        <Route path="/hoje" element={}/>
        <Route path="/historico" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
