import {useNavigate} from "react-router-dom";
import {useAuth} from "../provider/authProvider";

const Login = () => {
    const {setToken} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        setToken("This is a test token");
        navigate("/", {replace: true}); //redirect to the home page
    };

    setTimeout(() => { //simulate the user login
        handleLogin();
    }, 3 * 1000);

    return <div>Login Page</div>;
};

export default Login;