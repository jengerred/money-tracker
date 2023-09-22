import {useState} from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');

  function handleSubmit(e){
    e.preventDefault();

axios
.post(`http://localhost:4000/api/transaction`)
.then((res) => {
  console.log('res');
})
  };

  return (
<main>
  <h1>$400<span>.00</span></h1>

  <form onSubmit={handleSubmit}>

    <div className="basic">
      <input 
         type="text" 
         value={name} 
         onChange={e => setName(e.target.value)}
         placeholder="job title"
         ></input>

      <input
        type="datetime-local"
        value={datetime}
          onChange={e => setDatetime(e.target.value)}
       >
      </input>
    </div>

    <div className="description">
      <input 
      type="text" 
      placeholder="source of income: cash, paycheck, paypal, cashapp etc"
      value={description}
      onChange={e => setDescription(e.target.value)}
      ></input>
    </div>

    <div className="description">
    <input type="text" placeholder="description"></input>
    </div>

    <button className="expense-btn">Add an expense to this job</button>

    <button type="submit">Add Job</button>

  </form>

  <div className="transactions">

    <div className="transaction">

      <div className="left">
        <div className="name">Job with Mark</div>
        <div className="description">Short day</div>
        <br></br>
        <div className="description">Source of Income: Cash</div>
     
        <div className="ex-name">Expense: Paid 2 helpers</div>
      </div>

        <div className="right">
          <div className="profit">$300</div>
          <div className="datetime">2023-07-13 15:45</div>
          <br></br>
          <div className="price-green">$700</div>
        <div className="price-red">-$400</div>
      </div>

    </div>  


    <div className="transaction">

      <div className="left">
        <div className="name">Job with Corrigan</div>      
        <div className="description">Warehouse</div>
        <br></br>
        <div className="description">Source of Income: Paycheck</div>
      </div>

      <div className="right">
         <div className="profit">$400</div>
        <div className="datetime">2023-07-11 8:45</div>

      </div>

    </div>
      
    <div className="transaction">

      <div className="left">
        <div className="name">Job from Facebook</div>  
        <div className="description">Customer tips great</div>
        <br></br>
        <div className="description">Source of Income: CashApp</div>
      </div>

      <div className="right">
        <div className="profit">$400</div>
        <div className="datetime">2023-07-11 8:45</div>
        <br></br>
    
      </div>

    </div>

 </div>

  </main>
  );
}

export default App;
