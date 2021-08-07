import styled from 'styled-components'

import './App.css';

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) => isActive ? '1px solid black' : '3px dotted green'};
`

function App() {
  return (
    <div className="App">
      <Text isActive={true}>i am a component</Text>
    </div>
  );
}

export default App;
