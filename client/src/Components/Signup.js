import React from 'react';

const Signup = () => {
    return (
        <div class="ui form">
          <div class="field eight wide">
            <label>Name</label>
            <input type="text" placeholder="John Doe" />
            <label>E-mail</label>
            <input type="email" placeholder="joe@schmoe.com" />
            <label>Passcode</label>
            <input type="password" placeholder="*****" />
            <label>Password</label>
            <input type="password" placeholder="***********" />
            <label>Confirm Password</label>
            <input type="password" placeholder="***********" />
          </div>
          <div class="ui submit button">Signup</div>
        </div>
      );
}

export default Signup;