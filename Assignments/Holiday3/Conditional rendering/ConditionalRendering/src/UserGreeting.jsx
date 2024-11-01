import PropTypes from 'prop-types';
function UserGreeting(props){
    const welcomemessage = <h2 className="Welcome_msg">Welcome {props.username}</h2>
    const loginPrompt =  <h2 className="Login_prompt">Please login to continue.</h2> 

    return(
        props.isLoggedIn ? welcomemessage
        : loginPrompt
    )  
}

UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: true,
    username : "Guest",

}

export default UserGreeting