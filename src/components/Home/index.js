import React from 'react';
import './Home.css';

import LinkList from '../LinkList';
import CreateShortLink from '../CreateShortLink';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Create a short URL</h2>
                    <CreateShortLink />
                </div>
                <div>
                    <h2>All Links</h2>
                    <LinkList />
                </div>
            </div>
        );
    }
}

export default Home;
