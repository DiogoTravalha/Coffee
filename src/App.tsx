import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router";

function App() {
  return (
    <div className="flex flex-col px-40">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
