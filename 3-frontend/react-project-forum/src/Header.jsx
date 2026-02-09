import React from 'react';

function Header(props) {
    return (
        <>
            <img src={props.profileImg} alt={props.username} />
            <h2>{props.username}</h2>
        </>
    );
}

export default Header;