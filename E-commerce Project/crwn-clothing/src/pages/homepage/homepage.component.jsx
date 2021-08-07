import React from 'react';

import Directory from '../../components/directory/directory.component';


import { HomePageContainer } from './homepage.style';

const HomePage = ({ history }) => (
    <HomePageContainer>
        <Directory history={history}/>
    </HomePageContainer>
)

export default HomePage;