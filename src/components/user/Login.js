import React, { useState } from "react";

import {
    Form,
    FormGroup,
    FormControl,
    FormLabel,
    Button
} from "react-bootstrap";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
    };

    const handleChange = e => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    return (
        <div>
            <h1 className="text-center">Login below:</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Email: </FormLabel>
                    <FormControl
                        type="text"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Password:</FormLabel>
                    <FormControl
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <div className="text-center">
                    <Button type="submit" variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

const LoginForm = Login;
export default LoginForm;
