import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Header from "../components/header";
import SearchResult from "../pages/SearchResult";
import ArtistPage from "../pages/ArtistPage";
import PortfolioPage from "../pages/PortfolioPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/result" element={<SearchResult />} />
        <Route path="/search/result/artist" element={<ArtistPage />} />
        <Route path="/search/result/portfolio" element={<PortfolioPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;