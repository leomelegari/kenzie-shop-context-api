import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./style.css"


function App() {

  const [auth, setAuth] = useState(false);

  return (
    <div className="container-spa">
      <Header setAuth={setAuth} />
      <Routes auth={auth} setAuth={setAuth} />
      <Toaster />
      <GlobalStyle />
    </div>
  );
};

export default App;
