
import './App.css';
import Header from "./myComponents/Header";
import {Footer} from "./myComponents/Footer";
import {AddTodo} from "./myComponents/AddTodo";
import {Todos} from "./myComponents/Todos";
import {About} from "./myComponents/About";

import React, { useState ,useEffect} from 'react';
//for routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const ondelete =(todo)=>{
    console.log("I am delete",todo);
    //this does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos",JSON.stringify(todos));
  }

 
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0)
       sno=0;
    else
    {
       sno=todos[todos.length-1].sno+1;
    }  
   
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
     console.log(myTodo);
  }
  const [ todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    
   }, [todos])
  return (
    <>
    <Router>
      <Header title=" My Todos-List" search={true}/>

      <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
         <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} ondelete={ondelete}/>

        </>)
      }}>
        </Route>   
          <Route exact path="/about">
            <About />
          </Route>
          
        
        </Switch>

     
      <Footer/>
      </Router>
    </>
  );
}
export default App;
