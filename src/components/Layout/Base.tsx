import { Box } from '@mui/material';
import React from 'react';
import { BaseProps } from './Base.d';
import Footer from './Footer';
import Header from './Header';

const Base = (props: BaseProps) => {
    return (
        <React.Fragment>
            <main aria-labelledby="mainArea" id="mainArea">
                <Header />
                {props.children}
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Base;
