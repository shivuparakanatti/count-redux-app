import './App.css';
import { useSelector , useDispatch} from 'react-redux';
import { increment } from './action/countActions';
import Btn from './btn';
import Show from './Show';

function App() {

  const count = useSelector((state)=>{
    return state.count
  })

  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux training</h1>
        <h1>Count - {count}</h1>

        <button onClick={()=>{
          dispatch(increment())
        }}>+</button>
        
        <Btn/>
        <Show/>
      </header>
    </div>
  );
}

export default App;
