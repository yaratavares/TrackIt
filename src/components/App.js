import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLogin from "./PageInit/PageLogin";
import PageRegistration from "./PageInit/PageRegistration";
import PageToday from "./PageToday";

import UserLoginProvider from "./contexts/UserLogin";

export default function App() {
  return (
    <BrowserRouter>
      <UserLoginProvider>
        <Routes>
          <Route path="/" element={<PageLogin />} />
          <Route path="/cadastro" element={<PageRegistration />} />
          {/* <Route path="/habitos" element={} /> */}
          <Route path="/hoje" element={<PageToday />} />
          {/* <Route path="/historico" element={} /> */}
        </Routes>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
