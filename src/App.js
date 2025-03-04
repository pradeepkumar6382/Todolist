import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todolist from "./Pages/Todolist";
import Store from "./Redux/Todostore";
import { Provider } from "react-redux";

function App() {
  return (
  <Provider store={Store}>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Todolist/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
