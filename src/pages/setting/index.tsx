import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Button, Form, Input, Upload, Select } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import './index.less';

const { Option } = Select;

const Index: React.FC = (): React.ReactElement => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <PageHeaderWrapper>
      <Card title="个人设置">
        <div className="form">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            labelCol={{ span: 8 }}
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
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="性别"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
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
              label="入学时间"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="个人头像"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <ImgCrop rotate>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && '+ Upload'}
                </Upload>
              </ImgCrop>
            </Form.Item>
            <Form.Item
              label="风采照"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <ImgCrop rotate>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && '+ Upload'}
                </Upload>
              </ImgCrop>
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
