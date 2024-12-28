
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./components/Home"

import CustomizationPage from './components/CaseCustomisation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/case" Component={CustomizationPage}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
