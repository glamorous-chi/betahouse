import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup'
import Properties from './pages/Properties';
import Login from './pages/Login';
import Thankyou from './pages/Thankyou';
import NotFound from './pages/Notfound';
// import Logo from './components/Logo';
import { ScrollToTop } from './components/Scrolltotop';
import LogoMobile from './components/LogoMobile';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
function App() {

  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/properties" element={<Properties/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/thankyou" element={<Thankyou/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/logo" element={<LogoMobile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
