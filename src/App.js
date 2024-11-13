// import { Routes, Route } from "react-router-dom"
// import LoginForm from "./Components/LoginForm";
// import SignUp from "./Components/SignUp";
// import Header from "./Header";
// import MainPage from "./MainPage";
// import Home from "./Home";


// function App() {
//   return (
//     <div className="App">
    

//      {/* <Home /> */}
//       <Header />
//       <Routes>
//         <Route path="/" element={ <LoginForm/> } />
//         <Route path="signup" element={ <SignUp /> } />
//         <Route path="login" element={ <LoginForm /> } />
//         <Route path="home" element={ <Home/> } />
//         <Route path="mainpage" element={ <MainPage/> } />

       
//       </Routes> 
      
    
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { MeetingProvider } from './MeetingContext';
import { Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import SignUp from "./Components/SignUp";
import Header from "./Header";
import MainPage from "./MainPage";
import Home from "./Home";



function App() {
  return (
    <MeetingProvider>
      
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="home" element={<Home />} />
          <Route path="mainpage" element={<MainPage />} />
        </Routes>

      </div>

    </MeetingProvider>
  );
}

export default App;

// import React from 'react';
// import { MeetingProvider } from './MeetingContext';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import SignUp from './Components/SignUp';
// import Header from './Header';
// import MainPage from './MainPage';
// import Home from './Home';

// function App() {
//   return (
//     <MeetingProvider>
//       <Router>
//         <div className="App">
//           <Header />
//           <Routes>
//             <Route path="/" element={<LoginForm />} />
//             <Route path="signup" element={<SignUp />} />
//             <Route path="login" element={<LoginForm />} />
//             <Route path="home" element={<Home />} />
//             <Route path="mainpage" element={<MainPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </MeetingProvider>
//   );
// }

// export default App;

// import React from 'react';
// import { MeetingProvider } from './MeetingContext';
// import { Routes, Route } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import SignUp from './Components/SignUp';
// import Header from './Header';
// import MainPage from './MainPage';
// import Home from './Home';

// function App() {
//   return (
//     <MeetingProvider>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<LoginForm />} />
//           <Route path="signup" element={<SignUp />} />
//           <Route path="login" element={<LoginForm />} />
//           <Route path="home" element={<Home />} />
//           <Route path="mainpage" element={<MainPage />} />
//         </Routes>
//       </div>
//     </MeetingProvider>
//   );
// }

// export default App;
