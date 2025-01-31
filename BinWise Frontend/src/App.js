import {React } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ServicesPage from "./components/ServicesPage"; // Ensure the file exists
import "./App.css";
import { useState , useEffect} from "react";
import ScrapRates from "./components/scrapRates";
import affordable from "./assets/image_copy2.png";
import { useSelector , useDispatch } from 'react-redux'
import dustbin from "./assets/image_copy.png";
import reliable from "./assets/image.png";
import logo from "./assets/Screenshot 2025-01-26 013052.png";
import earth from "./assets/Screenshot 2025-01-25 234055.png";
import BuyScrap from "./components/BuyScrap";
import Login from "./components/login";
import RegisteredAsScrapDealer from "./components/Register_as_scrap_dealer"


function App() {
  const dispatch= useDispatch();
  const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn)
  console.log(isLoggedIn)

  const [log, setlog] = useState(localStorage.getItem('isLoggedIn') === 'true');
  useEffect(() => {
    const checkLoginStatus = () => {
      setlog(localStorage.getItem("isLoggedIn") === "true");
    };

    checkLoginStatus(); // Initial check when component mounts

    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

 async function handlelogout(e){
  e.preventDefault();
  // localStorage.setItem('isLoggedIn')=false
  setlog(false);
  dispatch(logout());
}
  return (
    <Router>
      <div className="App">
        {/* Header with Navigation */}
        <header className="App-header">
          <div className="logo">
            <img id="logo" src={logo} alt="Binwise Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/ScrapRates">Scrap Rates</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {
                isLoggedIn?
                (
                  <li>
                  <Link onClick={handlelogout} >Logout</Link>
                </li>
                  )
              :

              (
                <>
            <li>
              <Link  to="/login" >Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            </>
            )

        }
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <img src={earth} alt="Earth" />
                  <h1>Welcome to BinWise</h1>
                  <p>Your one-stop solution for all scrap-related services.</p>
                  <button>Get Started</button>
                </section>

                {/* Features Section */}
                <section className="features">
                  <div className="feature">
                    <img src={reliable} alt="Reliable Service" />
                    <h2>Reliable Service</h2>
                    <p>We offer reliable and fast scrap collection.</p>
                  </div>
                  <div className="feature">
                    <img src={dustbin} alt="Eco-Friendly" />
                    <h2>Eco-Friendly</h2>
                    <p>We ensure eco-friendly recycling processes.</p>
                  </div>
                  <div className="feature">
                    <img src={affordable} alt="Affordable Prices" />
                    <h2>Affordable Prices</h2>
                    <p>Competitive pricing for all your scrap needs.</p>
                  </div>
                </section>
              </>
            }
          />

          {/* Services Route */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/DragAndDropGame" element={<DragAndDropGame />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* Placeholder for other pages */}
          <Route path="/scrapRates" element={<ScrapRates />} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/game" element={ < Game />} />
          <Route path="/signup" element= {<RegisteredAsScrapDealer/>}/> 
          <Route path="/BuyScrap" element={<BuyScrap />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 BinWise. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

