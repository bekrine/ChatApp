import {Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/chatpage' element={<ChatPage/>}/>
    </Routes>
    
    
  );
}

export default App;
