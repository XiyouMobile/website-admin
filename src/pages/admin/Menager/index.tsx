import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProList } from '@ant-design/pro-components';
import { Card, Button, Modal, Tag, message, Popconfirm, Input } from 'antd';
import request from 'umi-request';
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

const dataSource = [
  {
    id: '1',
    name: '语雀的天空',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '2',
    name: 'Ant Design',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '4',
    name: 'TechUI',
    image:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

const NewPage: React.FC = (): React.ReactElement => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handle = (record: GithubIssueItem) => {
    console.log(record);
  };

  const confirm = (e: any) => {
    console.log(e);
    message.success('Click on Yes');
  };

  const cancel = (e: any) => {
    console.log(e);
    message.error('Click on No');
  };

  const onChange = (event: { target: HTMLInputElement }) => {
    setText(event.target.value);
  };

  const onClick = () => {
    console.log(text);
    message.success('新增成功');
  };

  return (
    <PageHeaderWrapper content={' 这个页面只有 admin 权限才能查看'}>
      <Card>
        <ProList<GithubIssueItem>
          toolBarRender={() => {
            return [
              <Button key="3" type="primary" onClick={showModal}>
                新建分类
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
          onItem={(record) => {
            return {
              onClick: () => {
                handle(record);
              },
            };
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
      </Card>
      <Modal title="新建分类" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ProList<any>
          toolBarRender={() => {
            return [
              <Input key="test" onChange={onChange} />,
              <Button key="add" type="primary" onClick={onClick}>
                新增组别
              </Button>,
            ];
          }}
          rowKey="name"
          headerTitle="基础列表"
          split={true}
          dataSource={dataSource}
          metas={{
            title: {
              dataIndex: 'name',
              render: (record) => {
                return <Tag color={'green'}>{record}</Tag>;
              },
            },

            actions: {
              render: (_, row) => [
                <Popconfirm
                  key={row.name}
                  title="你确认删除这个组别吗?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="确认"
                  cancelText="取消"
                >
                  <a href="#">删除</a>
                </Popconfirm>,
              ],
            },
          }}
        />
      </Modal>
    </PageHeaderWrapper>
  );
};

export default NewPage;
