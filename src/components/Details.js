import React from 'react';
import './Details.css';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import { useParams } from 'react-router-dom';
class Details extends React.Component{
    
    // useQuery() {
    //     return new URLSearchParams(useLocation().search);
    // }

    componentDidMount(){
        const { userName } = this.props.match.params.id;
        console.log(userName)
        const queryParams = new URLSearchParams(window.location.search);
        console.log(queryParams)
        const id = queryParams.get('id');
        console.log(id)
    }
    render(){
       
        return  (
            <div>
                 <div> each item detials</div>
                 <div className="SplitPane">
                    <div className="SplitPane-left">
                    
                    </div>
                    <div className="SplitPane-right">
                        
                    </div>
                </div>
            </div>
           
        );
    }
}

export default Details;