import { Routes, Route } from 'react-router-dom';
import GameMode from '../GameMode';
import Layout from '../Layout';
import TeamGameConditions from '../TeamGameConditions';
import './App.css';

function App() {
  return (
      <div className="App"> 
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<GameMode/>}/>
            <Route path='/TeamGameConditions' element={<TeamGameConditions/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
