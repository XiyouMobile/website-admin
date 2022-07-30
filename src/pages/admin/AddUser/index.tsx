import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Button, Form, Input, Select } from 'antd';
import React from 'react';
import './index.less';

const Index: React.FC = (): React.ReactElement => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PageHeaderWrapper>
      <Card title="添加成员">
        <div className="form">
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            labelAlign="left"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="姓名"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="班级"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="组别"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="性别"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="电话"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="入学时间
              "
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </PageHeaderWrapper>
  );
};

export default Index;
