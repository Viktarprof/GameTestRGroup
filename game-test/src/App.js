import './App.css';
import Game from './components/Game/Game';
import rgroup from './media/rGroup_LOGO.png'

function App() {
  return (
    <div className='container'>
       <img src={rgroup} alt='rgroup_logo'/>
        <Game/>
    </div>
  );
}

export default App;