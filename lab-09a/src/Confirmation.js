import React from 'react';

export default function Confirmation(props) {
    return (
        <React.Fragment>
            <ul>
                <li>Username: {props.userName}</li>
                <li>Email: {props.email}</li>
            </ul>
        </React.Fragment>
    )
}