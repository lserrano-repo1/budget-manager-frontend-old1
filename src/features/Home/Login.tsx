import React from 'react';
import Base from '../../components/Layout/Base';
import UserLogin from '../Login/UserLogin';

const Home = () => {
    return (
        <Base>
            <React.Fragment>
                <UserLogin />
            </React.Fragment>
        </Base>
    );
};

export default Home;
