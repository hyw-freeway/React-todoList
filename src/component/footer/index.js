import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  checkall=(event)=>{
    this.props.h(event.target.checked)
  }
  clearall=()=>{
    this.props.c()
  }

    render() {
        const {todos}=this.props
       const total=todos.length
        const donecount = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
        return (
            <div>
                <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.checkall} checked={donecount===total&&total!==0?true:false}/>
        </label>
        <span>
          <span>已完成{donecount}</span> / 全部{total}
        </span>
        <button onClick={this.clearall} className="btn btn-danger" >清除已完成任务</button>
      </div>
            </div>
        )
    }
}

