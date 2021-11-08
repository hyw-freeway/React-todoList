import React,{Component} from 'react';
import './App.css'
import Header from './component/header';
import List from './component/list';
import Footer from './component/footer';

export default class App extends Component {

  state={todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'打',done:false}
  ]}
  addtodo=(todoobj)=>{
    const {todos}=this.state
    const newtodos=[todoobj,...todos]
    this.setState({todos:newtodos})
  }
  updatetodo=(id,done)=>{
    const {todos}=this.state 
    const newtodos=todos.map((todoobj)=>{
        if(todoobj.id===id)
        {
          return {...todoobj,done:done}
        }
        else return todoobj
    })
    this.setState({todos:newtodos})
  }
  deletetodo=(id)=>{
    const {todos}=this.state
    const newstodo=todos.filter((todoobj)=>{
      return todoobj.id!==id
    })
    this.setState({todos:newstodo})
  }
  handleall=(done)=>{
    const {todos}=this.state 
    const newtodo=todos.map((todoobj)=>{
      return {...todoobj,done:done}
    })
    this.setState({todos:newtodo})
  }
  clearalldone=(done)=>{
    const {todos}=this.state
    const newtodo=todos.filter((todoobj)=>{
      return !todoobj.done
    })
    this.setState({todos:newtodo})
    
  }
  render() {
      return ( 
        <div className="todo-container">
        <div className="todo-wrap">
         <Header a={this.addtodo}/>
         <List todos={this.state.todos} u={this.updatetodo} d={this.deletetodo}/>
          <Footer todos={this.state.todos} h={this.handleall} c={this.clearalldone}/>
        </div>
      </div>
      )
  }
}
