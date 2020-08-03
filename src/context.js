import React from "react";
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    if (action.type === "CHANGE_USERINFO") {
      return { ...state, isAuthenticated:true, userInfo: action.payload, };
    }
    if (action.type === "SET_OWNTASKS") {
        return { ...state, owntasks: action.payload, };
      }
  };

export class Provider extends React.Component {
    state = { 
      isAuthenticated: localStorage.getItem('userInfo') ? true: false,
      userInfo: this.isAuthenticated ? JSON.parse(localStorage.getItem('userInfo')): [],
      owntasks: [],
      dispatch: action => {
        this.setState(state => reducer(state, action));
      }
    };

    componentDidMount = async () =>{
        if (this.state.isAuthenticated){
            const {token} = JSON.parse(localStorage.getItem('userInfo'))
            console.log(token);
            const response = await axios.get('http://localhost:8000/api/v1.0/tasks',
                { 
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                } 
            );
            console.log(response);
            this.setState({
                ...this.state,
                owntasks: response.data,
            });
        }
    }

    render() {
        const { children } = this.props;
        return ( 
        <Context.Provider value={this.state}>
            {children}
        </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;