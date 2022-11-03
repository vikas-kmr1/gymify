import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from "@mui/material";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box width="400px" sx={{width:{ xl:'1488px'}}} m="auto" >
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}></Route>
      </Routes>
      <Footer/>
    </Box>

  );
}

export default App;
