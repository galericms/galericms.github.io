import React, { useState } from "react";

import {
    Form,
    FormControl,
    FormLabel,
    FormGroup,
    Button
} from "react-bootstrap";

const SignUp = () => {
    const [user, setUser] = useState({
        first: "",
        last: "",
        email: "",
        username: "",
        password: "",
        password2: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (window.confirm("Are you sure?")) {
            if (user.password === user.password2) {
                const {password2, ...ret} = user;
                console.log(ret);
            } else {
                window.alert("Passwords don't match");
            }
        }
    };

    const handleChange = e => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    };

    return (
        <div>
            <h1 className="text-center">Register Below</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>First Name:</FormLabel>
                    <FormControl
                        type="text"
                        name="first"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Last Name:</FormLabel>
                    <FormControl
                        type="text"
                        name="last"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Username:</FormLabel>
                    <FormControl
                        type="text"
                        name="username"
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

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

                <FormGroup>
                    <FormLabel>Confirm Password:</FormLabel>
                    <FormControl
                        type="password"
                        name="password2"
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

//     render() {
//         const { getFieldDecorator } = this.props.form;

//         return (
//             <div style={{ margin: "auto", maxWidth: "400px" }}>
//                 <h1>Sign up below:</h1>

//                 <Form onSubmit={this.handleSubmit}>
//                     <Form.Item label="First Name">
//                         {getFieldDecorator("first", {
//                             rules: [{ required: true, message: "First name!" }]
//                         })(
//                             <Input
//                                 prefix={<Icon type="user" />}
//                                 placeholder="First"
//                             />
//                         )}
//                     </Form.Item>

//                     <Form.Item label="Last Name">
//                         {getFieldDecorator("last", {
//                             rules: [{ required: true, message: "Last name!" }]
//                         })(
//                             <Input
//                                 prefix={<Icon type="user" />}
//                                 placeholder="First"
//                             />
//                         )}
//                     </Form.Item>

//                     <Form.Item label="User Name">
//                         {getFieldDecorator("user", {
//                             rules: [{ required: true, message: "UserName!" }]
//                         })(
//                             <Input
//                                 prefix={<Icon type="user" />}
//                                 placeholder="Username"
//                             />
//                         )}
//                     </Form.Item>

//                     <Form.Item label="Email">
//                         {getFieldDecorator("email", {
//                             rules: [{ required: true, message: "Email!" }]
//                         })(
//                             <Input
//                                 prefix={<Icon type="mail" />}
//                                 placeholder="email"
//                             />
//                         )}
//                     </Form.Item>

//                     <Form.Item label="Password">
//                         {getFieldDecorator("password", {
//                             rules: [{ required: true, message: "password!!!" }]
//                         })(
//                             <Input.Password
//                                 visibilityToggle={true}
//                                 prefix={<Icon type="safety" />}
//                                 placeholder="Password"
//                             />
//                         )}
//                     </Form.Item>

//                     <Button
//                         type="primary"
//                         htmlType="submit"
//                         style={{
//                             display: "block",
//                             margin: "auto",
//                             marginTop: "24px"
//                         }}
//                     >
//                         Sign Up
//                     </Button>
//                 </Form>
//             </div>
//         );
//     }
// }

const SignUpForm = SignUp;
export default SignUpForm;
