//Higher order component - component that renders another component
//Reuse code
//Render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>  
);

const withAdminWarning = (WrappedComponent) => {
    //return new highrer order component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};
// require authentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>Please Login</p>}
        
        </div>
    )
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info)

//ReactDOM.render(<AdminInfo isAdmin={false} info="Here are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Here are the details"/>, document.getElementById('app'));