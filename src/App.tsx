import { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("ss02");
  }, []);
  return (
    <BrowserRouter>
      <Suspense>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
