import { A } from "@solidjs/router";

import LoginForm from "../components/loginform/loginform";
import ReqForm from "../components/reqform/reqform";

const Login: Component = () => {
    return (
    <div class="bg-cover h-screen ">
        <div class="grid lg:grid-cols-2 grid-cols-1">
            <LoginForm />
            <div class="hidden lg:block bg-[url('./assets/bg.svg')]"> <ReqForm /></div>
        </div>
    </div>
    );
};

export default Login;
