import styled from 'styled-components'

import './App.css';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) => isActive ? '1px solid black' : '3px dotted green'};
`
const AppFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
function App() {
  return (
    <AppFlex>
      {/* HOC (High Order Component) ni ishlatish va qo'lashga yordam bergan componentlar */}
      {/* Bu ikkta component yani UserList va UserProfileni ichida aslida fetch bo'lishi kerak va u yordamida malumotlarni olib unga yozish kerak edi. Biz code ni toza yozishi va bita code ni qaytarmaislig uchun HOC dan foydalandik */}
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile name="Aslamjon" email="aslamjon.ibragimov@gmail.com" dataSource='https://jsonplaceholder.typicode.com/posts' />
      {/* Text Componet Styled ni tushunish uchun ishlatilgan */}
      <Text isActive={true}>i am a component</Text>
    </AppFlex>
  );
}

export default App;
