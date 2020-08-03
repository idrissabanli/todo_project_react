import React, { Component } from 'react'
import Task from '../components/Task';
import {Consumer} from '../context'

export default class Tasks extends Component {
    
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const {owntasks} = value;
                        return (
                            
                            <div className="accordion" id="accordionExample">
                                {
                                    owntasks.map(task=>{
                                        return <Task key={task.id} { ...task } />
                                    })
                                }
                                
                                
                            </div>
                        )
                    }
                }
            </Consumer>
        )

        
    }
}
