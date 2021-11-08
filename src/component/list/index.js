import React, {Component} from 'react'
import Item from '../item'
import './index.css'
export default class List extends Component {
    render() {
        const {todos,u,d}=this.props
        return ( 
        <div>
            <ul className="todo-main" >
               {todos.map(
                   todocontent=>{
                       return <Item key={todocontent.id} {...todocontent} u2={u} d2={d}/>
                   }
               )
            }
            </ul>  
        </div>
        )
    }
}