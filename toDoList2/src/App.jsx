import { useState, forceUpdate } from 'react';
import Filter from './Components/Filter';
import ToDoList from './Components/ToDoList';
import NewTask from './Components/NewTask';
import Quote from './Components/Quote';


function App() {
  const [taskList, setTaskList] = useState(null);
  const [taskId, setTaskId] = useState(0);
  const [filter, setFilter] = useState(false);
  const [rerender, setRerender] = useState(false);

  function addTask(description){
    if(taskList === null){
      setTaskList([{id: taskId, description: description, state: false}]);
    }
    else{
      setTaskList([...taskList, {id: taskId, description: description, state: false}]);
    }
    setTaskId(taskId + 1);
  }

  function changeTask(id){
    let tempList = taskList;
    tempList.map((task) => {
      if(task.id === id){
        task.state = !task.state;
      }
      return task;
    });
    setTaskList(tempList);
    setRerender(!rerender)
  }

  function changeFilter(){
    setFilter(!filter);

  }
  return (
    <div className="App">
      <h1>Witam w liście zadań :)</h1>
      <div className="App-wrapper">
        <Filter handleChangeFilter={changeFilter}/>
        <hr/>
        {taskList === null || (filter === true && taskList.filter((task) => task.state === false).length === 0)
        ? <Quote/> : <ToDoList taskList={taskList} filter={filter} handleChange={changeTask}/>}
        <hr/>
        <NewTask handleClick={addTask}/>
      </div>
    </div>
  )
}

export default App
