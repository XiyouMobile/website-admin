import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag, message, Popconfirm, Modal, Form, Input } from 'antd';
import { history } from 'umi';
import request from 'umi-request';
import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import './index.less';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const confirm = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e?: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error('Click on No');
};

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export default () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <PageHeaderWrapper>
      <ProList<GithubIssueItem>
        toolBarRender={() => {
          return [
            <Button
              key="3"
              type="primary"
              onClick={() => {
                history.push('/admin/member/add');
              }}
            >
              新建
            </Button>,
          ];
        }}
        search={{
          filterType: 'light',
        }}
        rowKey="name"
        headerTitle="基础列表"
        request={async (params = {}) =>
          request<{
            data: GithubIssueItem[];
          }>('https://proapi.azurewebsites.net/github/issues', {
            params,
          })
        }
        pagination={{
          pageSize: 5,
        }}
        metas={{
          title: {
            dataIndex: 'user',
            title: '用户',
          },
          avatar: {
            dataIndex: 'avatar',
            search: false,
          },
          description: {
            dataIndex: 'title',
            search: false,
          },
          subTitle: {
            dataIndex: 'labels',
            render: (_, row) => {
              return (
                <Space size={0}>
                  {row.labels?.map((label: { name: string }) => (
                    <Tag color="blue" key={label.name}>
                      {label.name}
                    </Tag>
                  ))}
                </Space>
              );
            },
            search: false,
          },
          actions: {
            render: () => [
              <Button key="link" type="link" onClick={showModal}>
                编辑
              </Button>,
              <Popconfirm
                key="l"
                title="你确定要删除这个用户吗?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="确认"
                cancelText="取消"
              >
                <a href="#">删除</a>
              </Popconfirm>,
            ],
            search: false,
          },
          status: {
            // 自己扩展的字段，主要用于筛选，不在列表中显示
            title: '组别',
            valueType: 'select',
            valueEnum: {
              all: { text: '全部', status: 'Default' },
              Web: {
                text: 'Web',
                status: 'Web',
              },
              Server: {
                text: 'Server',
                status: 'Server',
              },
              Android: {
                text: 'Android',
                status: 'Android',
              },
              iOS: {
                text: 'iOS',
                status: 'iOS',
              },
            },
          },
        }}
      />
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        footer={null}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageHeaderWrapper>
  );
};
