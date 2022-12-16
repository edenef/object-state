
import './App.css';
import {useState} from 'react'
function App() {
  const[toDo,setToDo]=useState('')
  const[toDoList,setToDoList]=useState(['Buy milk','Goto a movie','walk the dog'])

  function handelTpDoChange(e){
    setToDo(e.target.value)
  }

  function AddItem(){
    setToDoList(toDoList.push(toDo))
  }

  return (
    <div className="App">
      <input value={toDo} onChange={handelTpDoChange}/>
      <button onClick={AddItem}>Add to list</button>
      <h3> List of thinks to do</h3>
      <ul> {toDoList.map(
        toDo => (
          <li>{toDo}</li>
        )
      )}


      </ul>

    </div>
  );
}

export default App;
