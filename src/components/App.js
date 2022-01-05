import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLogin from "./PageInit/PageLogin";
import PageRegistration from "./PageInit/PageRegistration";
import PageToday from "./PageToday";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/cadastro" element={<PageRegistration />} />
        {/* <Route path="/habitos" element={} /> */}
        <Route path="/hoje" element={<PageToday />} />
        {/* <Route path="/historico" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
