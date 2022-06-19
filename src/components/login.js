import { Form, Input, Button, Checkbox, message } from "antd"
import { ToastContainer, toast } from "react-toastify";
import '../styles/login.css'

const Login = (props) => {
    const onFinish = async (values) => {
        await fetch('https://reqres.in/api/login/', {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(values),
            mode: "cors",
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) toast.success('User logged in')
                else if (data.error) toast.error(data.error)
            });

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <div className="login-wrapper">
            <div className="form-wrapper">
                <div style={{ textAlign: 'center' }}>
                    <h1><b>{props.title}</b></h1>
                    <p>{props.subtitle}</p>
                </div>
                <Form
                    name="basic"
                    wrapperCol={{
                        span: '100%',
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Email Address *" size='large' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password *" size='large' />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            span: '100%',
                        }}
                        style={{ marginBottom: '0.5rem' }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }} size='large'>
                            Submit
                        </Button>
                    </Form.Item>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                span: '50%',
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Button type='link' style={{ padding: 0 }}>Forgot Password?</Button>
                    </span>
                </Form>
            </div>
        </div>
        <ToastContainer />
    </>
}

export default Login