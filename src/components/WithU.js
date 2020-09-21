import React from 'react';
import { render } from 'react-dom';

import Home from './Home/Home';
import Footer from './Footer/Footer';

const WithU = () => {
    return (
        <div className='with-u'>
            <Home />
            <Footer />
        </div>
    );
};

render(React.createElement(WithU), document.getElementById('root'));