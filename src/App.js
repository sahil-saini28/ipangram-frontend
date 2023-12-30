import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteContextProvider from './Context/NoteContextProvider';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <NoteContextProvider>
<BrowserRouter>
 <LandingPage/>
 
<Routes>
{/* <SignUp/> */}
 <Route path='/signup'  element={<SignUp/>}></Route>
 <Route path='/signin'  element={<Login/>}></Route>
 <Route path='/dashboard'  element={<DashBoard/>}></Route>

    </Routes>
</BrowserRouter>
    </NoteContextProvider>

  );
}

export default App;
