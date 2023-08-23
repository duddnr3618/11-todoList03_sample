import UseReducer from './component/UseReducer';
import UseState from './component/UseState';

function App() {
  return (
    <div>
      <h1> useState 사용</h1>
      <br />
      <UseState />
      <br /><br />

      <hr />
      <h1> useReducer 사용 </h1>
      <UseReducer />

    </div>
  );
}

export default App;
