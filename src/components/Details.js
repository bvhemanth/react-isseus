import React from 'react';
import './Details.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import { url }  from './constants';

class Details extends React.Component{

    state = {
        details:[]
      }

    id = window.location.pathname;
   
    componentDidMount(){
        const gitid = this.id.split('/').pop();
        const reqUrl= url+"/"+gitid;
        console.log(reqUrl)
        axios({
            method: 'GET',
            url:reqUrl,
        }).then(response => {
            const details = response.data;
            this.setState({ details });
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return  (
            <div>
                 <div className="SplitPane">
                    <div className="SplitPane-left">
                    <div>
                        {this.state.details.title}  <span className="cardnumber">#{this.state.details.number}</span> 
                        <h3>Status</h3> 
                        {this.state.details.state}
                        <h3>Labels</h3> 
                        <div>
                          --
                        </div>
                        <h3>Created</h3> 
                        { this.state.details.created_at}
                    </div>
                    </div>
                    <div className="SplitPane-right">
                        <h2>Summary</h2>
                        <div>
                        {this.state.details.body}
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Details;