import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Typography, Card } from "antd";
import { login } from '../../actions/userActions';
import { connect } from 'react-redux';

const { Text } = Typography;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

class LoginPage extends Component {
    onFinish = (data) => {
        console.log("Finish: ", data);
        this.props.login(data).then(data => {
            console.log("DATA", data)
        })
    }
    render() {
        return (
            <Card title={<Text underline>Login</Text>} style={{ width: 600, textAlign: "center", margin: "50px auto" }}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default connect(null, { login })(LoginPage);