import  { memo } from 'react';
import './Style.css'

const SignInPage = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h1>Welcome ...</h1>
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
                <div className="btns">
                    <button>Log In</button>
                    <button>Exit</button>
                </div>
            </div>
        </div>
    )
};

export default memo(SignInPage);
