import logo from './logo.svg';
import './App.css';
import HeightEval from './Component/HeightEval';
import BreadthEval from './Component/BreadthEval';
import { useSelector } from 'react-redux';

function App() {
    const length = useSelector(state => state.height.length)
    const width = useSelector(state => state.breadth.width)
    const height = useSelector(state => state.height)

    return (
    <div className="App">
       <h3>react-redux tutorial starts....</h3>
       <h4>App</h4>
       {
          height.pending ? (<p>loading.....</p>)  
        : height.error ? (
          <p>{height.error}</p>
        )
        : (<h3>Current length : {length}cm</h3>)
     }
     <h3>Total width : {width}cm</h3>
       <HeightEval></HeightEval>
       <BreadthEval></BreadthEval>
    </div>
  );
}

export default App;
