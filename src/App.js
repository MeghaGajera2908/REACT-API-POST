import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [inputdata, setInputdata] = useState({ firstname: "", lastname: "", age: "" });

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', inputdata)
    .then((res) => {
      console.log(res)
    })
    .catch((e)=> {
      console.log(e)
    })
}
console.log(inputdata);
return (
  <div className="App">
    <div>
      <label htmlFor='fname'>firstname</label>
      <input type='text' id='fname' name='firstname' value={inputdata.firstname} onChange={(e) => handleChange(e)} />
    </div>
    <div>
      <label htmlFor='lname'>lastname</label>
      <input type='text' id='lname' name='lastname' value={inputdata.lastname} onChange={(e) => handleChange(e)} />
    </div>
    <div>
      <label htmlFor='age'>age</label>
      <input type='number' id='age' name='age' value={inputdata.age} onChange={(e) => handleChange(e)} />
    </div>
    <div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  </div>
);
}

export default App;
