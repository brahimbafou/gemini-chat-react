import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page margin-xl padding-xl radius-l display-column align-center justify-space-between wide-50">
            <h1 className="typo-h1">Welcome to the Chat App</h1>
            <Link to="/chat" className="button radius">Start Chatting</Link>
        </div>
    );
};

export default Home;