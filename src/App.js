import React from "react";
import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import Favorites from "./pages/FavoritesPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
