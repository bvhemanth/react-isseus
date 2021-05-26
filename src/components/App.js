import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Header from './Header';
import List from './List';
import Details from './Details';
import axios from 'axios';
const query = 
`query list {
  title
  number
}`;
const url="https://api.github.com/repos/rails/rails/issues?page=1&per_page=25";

const client = new ApolloClient({
  url:"https://api.github.com/repos/rails/rails/issues?page=1&per_page=25"
})
function App() {
  console.log(url)
  const getData = () => {
    axios({
        method: 'GET',
        url: url,
    })
    .then(response => {
      console.log(response)
        // add data to state
        //setData(response.data.data)
    })
    .catch(error => {
        //setLoading(false)
        console.log(error)
    })
}


  // useEffect(()=>{
  //   const fetchData =async ()=>{
  //     console.log('afwf')
  //     const queryResull = await axios.get(
  //       url,
  //       {query : query}
  //     )

  //     const result = queryResull.data;
  //   }
  // })

  return (
    <div className="App">
      {/* <button type='button' onClick={getData}>Get Data</button> */}
      {/* <ApolloProvider client={client}>

      </ApolloProvider> */}
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={List}></Route>
          <Route path="/issue/:id" component={Details}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
