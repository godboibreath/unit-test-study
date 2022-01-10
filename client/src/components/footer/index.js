import React, { useState, useEffect } from 'react';

import './footer.scss';

export default ({ value = 0 }) => {
    const [state, setState] = useState();

    return (
        <div className="footer">
            <div
                className="footer__element"
                style={{
                    background: 'red',
                    width: `${value}%`,
                }}
            ></div>
        </div>
    );
};
