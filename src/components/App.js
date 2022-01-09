import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginProvider from "../contexts/UserLogin";
import PercentageProgress from "../contexts/PercentageProgress";

import PageLogin from "./PageInit/PageLogin";
import PageRegistration from "./PageInit/PageRegistration";
import PageToday from "./PageToday";
import PageHabits from "./PageHabits";
import PageHistory from "./PageHistory";

export default function App() {
  return (
    <BrowserRouter>
      <UserLoginProvider>
        <PercentageProgress>
          <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageRegistration />} />
            <Route path="/habitos" element={<PageHabits />} />
            <Route path="/hoje" element={<PageToday />} />
            <Route path="/historico" element={<PageHistory />} />
          </Routes>
        </PercentageProgress>
      </UserLoginProvider>
    </BrowserRouter>
  );
}
