import React, { ReactChildren, ReactChild } from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head'

interface Props {
    a?: string,
    children?: ReactChildren | ReactChild
}

const Nav: React.FC<Props> = ({ children }) =>{
    return(
    <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
                { 
                    children
                }
            <Footer/>
    </div>
    );
}

export default Nav;