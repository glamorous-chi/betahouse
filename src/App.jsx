import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup'
import Properties from './pages/Properties';
import Login from './pages/Login';
import { ToastContainer } from "react-toastify";
import NotFound from './pages/Notfound';
// import Logo from './components/Logo';
import { ScrollToTop } from './components/Scrolltotop';
import LogoMobile from './components/LogoMobile';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Houses from './components/Houses'
import { AuthProvider } from './contexts/Auth';
import 'react-toastify/dist/ReactToastify.css';
import DetailPage from './pages/DetailPage';
import Search from './pages/Search'

function App() {

  return (
    <>
      <Router>
      <AuthProvider>
      <ToastContainer/>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/properties" element={<Properties/>} />
          <Route path="/properties" element={<Houses/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/logo" element={<LogoMobile/>}/>
        </Routes>
      </AuthProvider>
      
      </Router>
    </>
  )
}

export default App
