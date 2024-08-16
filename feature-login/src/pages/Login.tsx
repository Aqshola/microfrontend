import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input, Typography } from "antd";
import { ElementObjectCssStyle } from "../types/general";
import useAuthStore from "../store/authStore";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  const STYLE = {
    FlexWrapper: {
      marginTop: "64px",
    },

    ButtonLogin: {
      width: "100%",
    },

    InputLogin: { width: "300px" },
  } satisfies ElementObjectCssStyle;

  const auth = useAuthStore();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    auth.setToken();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex align="center" vertical style={STYLE.FlexWrapper}>
      <Typography.Title>Login</Typography.Title>
      <Form
        requiredMark={false}
        layout="vertical"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input style={STYLE.InputLogin} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password style={STYLE.InputLogin} />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button style={STYLE.InputLogin} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
