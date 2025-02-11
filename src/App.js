
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/Login/LoginPage';
import Practice from './Components/Practice/Practice';
import Admin from './Components/Admin/Admin';
import DataGridDemo from './Components/Admin/DataGridDemo';
import Home from './Components/Admin/Home';
import AddQuestions from './Components/Admin/AddQuestions';
import GroupedStudents from './Components/Admin/GroupedStudents';



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainPage" element={<Footer/>}/>
        <Route path="/SignUp" element={<NavBar />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/StudentsData" element={<DataGridDemo />} />
        <Route path="/Addquestion" element={<AddQuestions />} />
        <Route path="/GroupedStudents" element={<GroupedStudents />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
