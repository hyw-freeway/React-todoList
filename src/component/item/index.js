import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state={mouse:false}
  
  handleMouse=(flag)=>{
    return ()=>{
      //console.log(flag)
      this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
    return (event)=>{
      //console.log(id,event.target.checked)
      this.props.u2(id,event.target.checked)
    }
  }

  del=(id)=>{
    return ()=>{
      if(window.confirm('确定删除吗')){
      this.props.d2(id)}
    }
  }

    render() {
      const {id,name,done}=this.props
        return (
      
            
       <li style={{backgroundColor:this.state.mouse?'#ddd':'white'}} 
           onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}
                   onClick={this.del(id)}>删除</button>
        </li>
           
        )
    }
}
