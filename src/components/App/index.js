import React from 'react';
import './App.css';

import LinkList from '../LinkList';
import CreateShortLink from '../CreateShortLink';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>All Links</h2>
                    <LinkList />
                </div>
                <div>
                    <h2>Create a short URL</h2>
                    <CreateShortLink />
                </div>
            </div>
        );
    }
}

export default App;
