import { A } from "@solidjs/router";

import LoginForm from "../components/loginform/loginform";

const Login: Component = () => {
    return (
    <div class="bg-cover h-screen ">
        <div class="grid grid-cols-2 gap-4">
            <LoginForm />
            <div class="bg-[url('./assets/bg.svg')]"></div>
        </div>
    </div>
    );
};

export default Login;
