import React,{useRef} from "react";
import { Row, Form, Card, Button,Input } from "antd";

export default function Signin() {
    const emailRef = useRef()
    const passwordRef = useRef()
  return (
    <Row justify="center" style={{margin:"1rem"}}>
      <Card style={{width:"25rem"}}>
        <Form layout="vertical">
          <Form.Item label="email" ref={emailRef} name="email">
            <Input  />
          </Form.Item>
          <Form.Item label="Password" ref={passwordRef} name="password">
            <Input.Password  />
          </Form.Item>
          <Form.Item>
              <Button>Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
}
