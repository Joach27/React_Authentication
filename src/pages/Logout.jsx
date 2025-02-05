import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Logout = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();

    const handleLogout = () => {
        setToken(null);
        navigate("/", { replace: true }); //redirect to the login page
    };

    setTimeout(() => {
        handleLogout();
    }, 3 * 1000);

    return <div>Logout Page</div>;
};

export default Logout;