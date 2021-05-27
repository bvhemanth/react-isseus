import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';
import { url }  from './constants';
const query = 
`query list {
  title
  number
}`;


class List extends React.Component{
    state = {
        list: []
      }

    componentDidMount(){
        axios({
            method: 'GET',
            url: url+'?page=1&per_page=25',
        })
        .then(response => {
          const list = response.data;
          this.setState({ list });
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        return (
        <div>
            { this.state.list.map(item =>  
             
                <div className="eachIssue" key={item.number}>
                    <Link to={`/issue/${item.number}`}>
                        <div className="item" >
                            <div className="cardtitle">{item.title}</div>
                            #{item.number}
                            <div>
                                {item.labels.map((label)=>{
                                return (
                                    <div className="label" style={{'backgroundColor': '#'+label.color}}>
                                        {label.name}
                                    </div>
                                )
                             }) }
                            </div>
                            <div className="cardauthor"> - {item.user.login} </div>
                        </div>
                </Link>                
            </div>)}
           
        </div>)
    }
}

export default List;