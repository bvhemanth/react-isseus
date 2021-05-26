import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import axios from 'axios';
const query = 
`query list {
  title
  number
}`;
const url="https://api.github.com/repos/rails/rails/issues?page=1&per_page=25";

class List extends React.Component{
    state = {
        list: []
      }
    componentDidMount(){
        
        axios({
            method: 'GET',
            url: url,
        })
        .then(response => {
          console.log(response)
          const list = response.data;
          console.log(list);
          this.setState({ list });
        })
        .catch(error => {
            //setLoading(false)
            console.log(error)
        })
    }

    renderList =  this.state.list.map((item)=>{
        console.log(item)
        const labels= item.labels.map((label)=>{
            console.log(label);
            return (
                <div className="label" style={{'backgroundColor': '#'+label.color}}>
                    {label.name}
                </div>
            )
        })
        return (
            <div className="eachIssue" key={item.number}>
                <Link to={`/issue/${item.number}`}>
                    <div className="item" >
                        <div className="cardtitle">
                            {item.title}  <span className="cardnumber">#{item.number}</span>
                        </div>
                   
                    {/* -{item.user.login} */}
                    {labels}
                    </div>
                    
                </Link>                
            </div>
        )
    })
    render(){
        return (
        <div>
            { this.state.list.map(item =>  <div className="eachIssue" key={item.number}>
                <Link to={`/issue/${item.number}`}>
                    <div className="item" >
                        <div className="card__title">{item.title}</div>
                    {item.number}
               
                    {/* {labels} */}
                    <div class="card__author"> - {item.user.login} </div>
                    </div>
                    
                </Link>                
            </div>)}
            {this.renderList}
        </div>)
    }
}

export default List;