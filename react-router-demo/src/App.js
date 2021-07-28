import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const HomePage = props => {
  return (
    <div>
      <Link to='/topics'>Topics</Link> <br/>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  )
}
const TopicsList = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`} >To TOPIC 13</Link>
      <Link to={`${props.match.url}/15`} >To TOPIC 15</Link>
      <Link to={`${props.match.url}/17`} >To TOPIC 17</Link>
    </div>
  )
}
const TopicDetail = props => {
  return (
    <div>
      <h1>Topic Detail {props.match.params.topicId}</h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
      <Route exact path='/something/topics' component={TopicsList} />
      <Route path='/something/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
