import React from "react";
import { Row, Form, Card, Button } from "antd";

export default function Signin() {
  return (
    <Row>
      <Card>
        <Form>
          <Form.Item label="email" ref={emailRef} name="email">
            <Input value={value} />
          </Form.Item>
          <Form.Item label="Password" ref={passwordRef} name="password">
            <Input.Password value={value} />
          </Form.Item>
          <Form.Item>
              <Button>Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
}
