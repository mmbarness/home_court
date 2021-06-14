import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
    }

    componentWillReceiveProps(newState) {
        
    }   
    
    render() {
      return(
        <div>user profile</div>
      )
    }
}

export default Profile;
