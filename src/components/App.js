import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLogin from "./PageInit/PageLogin";
import PageRegistration from "./PageInit/PageRegistration";

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
