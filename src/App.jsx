import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LOGIN, LOGOUT, PROFILE } from "./routes/Path";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import AuthContextProvider from "./context/Context";
import RutaPublica from "./components/RutaPublic";
import RutaPrivate from "./components/RutaPrivate";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/*ruta publica*/}
            <Route path="/" element={<RutaPublica/>}>
              <Route index element={<Home />} />
              <Route path={LOGIN} element={<Login />} />
            </Route>
            {/*ruta privada*/}
            <Route path={PROFILE} element={<RutaPrivate/>}>
              <Route index element={<Profile />} />
              <Route path={LOGOUT} element={<Logout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
};

export default App;
