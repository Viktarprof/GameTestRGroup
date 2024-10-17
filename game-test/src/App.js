import './App.css';
// import Game from './components/Game/Game';
import TestSelector from './components/TestSelector/TestSelector';
import rgroup from './media/rGroup_LOGO.png'

function App() {
  return (
    <div className='container'>
       <img src={rgroup} alt='rgroup_logo'/>
        <TestSelector/>
    </div>
  );
}

export default App;