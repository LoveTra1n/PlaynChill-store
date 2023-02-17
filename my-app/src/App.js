import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import GamesSite from "./components/gamesItem-Site/GamesSite";
import OrderingSite from "./pages/ordering/OrderingSite";
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={"/:id"} element={<GamesSite/>}/>
                <Route path={"/order"} element={<OrderingSite/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
