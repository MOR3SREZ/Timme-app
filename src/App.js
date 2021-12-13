import './App.css';

function App() {
  return (
    <div className='App'>
      <h2>Timer</h2>
      <div className='timer'>
        <div className='display'>
          <span>12 h</span>:<span>30 m</span>:<span>53 s</span>
        </div>
        <button>Start</button>
      </div>

      <div className='time'>
        <div className='time-values'>
          <div className='hour'>
            <label htmlFor='hour'>Hour</label>
            <input type='text' name='hour' id='hour' />
          </div>
          <div className='minute'>
            <label htmlFor='minute'>Minute</label>
            <input type='text' name='minute' id='minute' />
          </div>
          <div className='second'>
            <label htmlFor='second'>Second</label>
            <input type='text' name='second' id='second' />
          </div>
        </div>
        <button>ADD</button>
      </div>
    </div>
  );
}

export default App;
