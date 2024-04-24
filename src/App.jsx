import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Library from "./pages/Library";
import Bookstore from "./pages/Bookstore";
import Profile from "pages/Profile";
import ShoppingCart from "pages/ShoppingCart";

import { store } from "./store";
import { Provider } from "react-redux";
import { DarkModeProvider } from "components/DarkModeContext";
import HomePage from "pages/HomePage";
import Navbar from "components/Navbar";
import Audioplayer from "pages/Audioplayer";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/bookstore" element={<Bookstore />}></Route>
            <Route path="/audioplayer" element={<Audioplayer />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>

            <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
          </Routes>
        </Provider>
      </DarkModeProvider>
    </>
  );
}

export default App;
