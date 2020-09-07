import React from 'react';
import { render } from 'react-dom';

import Home from './Home/Home';
import Header from './Header/Header';

const WithU = () => {
    return (
        <div className='with-u'>
            <Home />
        </div>
    );
};

render(React.createElement(WithU), document.getElementById('root'));