import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h2 style={{ color: 'white' }}>{props.menuTitle}</h2>
            <ul className="list-unstyled mt-4">
                {
                    props.menuItems.map((item, index) => <li key={index} style={{ color: 'white' }}>
                        {item.name}
                    </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;