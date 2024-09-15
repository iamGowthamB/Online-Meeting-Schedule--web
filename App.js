import { Routes, Route } from "react-router-dom"
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUp from "./Components/SignUp/SignUp";
import Header from "./Header";
import MainPage from "./MainPage";
import Home from "./Home";





function App() {
  return (
    <div className="App">
    

     {/* <Home /> */}
      <Header />
      <Routes>
        <Route path="/" element={ <LoginForm/> } />
        <Route path="signup" element={ <SignUp /> } />
        <Route path="login" element={ <LoginForm /> } />
        <Route path="home" element={ <Home/> } />
        <Route path="mainpage" element={ <MainPage/> } />

       
      </Routes> 
      
    
    </div>
  );
}

export default App;

