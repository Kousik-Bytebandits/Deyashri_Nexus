import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutFAQ from "./Pages/About"
import Home from "./Pages/Home"
import TrendingProducts from "./Pages/TrendingProducts"

 const App = () => {
  return (
    <div>
      <Navbar /> 
      <Home />
      <TrendingProducts />
      <AboutFAQ />
      <Footer />
    </div>
  )
}

export default App
