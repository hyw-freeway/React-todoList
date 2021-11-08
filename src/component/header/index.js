import React, { Component } from 'react'

import './index.css'
import { nanoid } from 'nanoid'

export default class Header extends Component {

    handleKeyUp=(event)=>{
        if(event.target.value.trim()===''){
            alert('输入不能为空')
            return 
        }
        if(event.keyCode===13) {     
        const todoobj={id:nanoid(),name:event.target.value,done:false}
        this.props.a(todoobj) 
        event.target.value=''}
    }
    
    render() {
        return (
            <div>
                < div className="todo-header" >
                    <input type="text" onKeyUp={this.handleKeyUp}
                        placeholder="请输入你的任务名称，按回车键确认" />
                    </div>
            </div>
        )
    }
}
