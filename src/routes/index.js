import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Header from "../components/header";
import SearchResult from "../pages/SearchResult";
import ArtistPage from "../pages/ArtistPage";
import PortfolioPage from "../pages/PortfolioPage";
import PortfolioDetailPage from "../pages/PortfolioDetailPage";
import MyPage from "../pages/MyPage";
import ProfilePage from "../pages/ProfilePage";
import DetailPage from "../pages/DetailPage";
import ArtistDetailPage from "../pages/ArtistDetailPage";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/result" element={<SearchResult />} />
        <Route path="/search/result/artist" element={<ArtistPage />} />
        <Route path="/search/result/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
        <Route path="/artist/:id" element={<ArtistDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detail" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;