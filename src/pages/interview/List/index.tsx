import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import { history } from 'umi';
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
const handle = (record: any) => {
  const { id } = record;
  history.push(`/interview/list/id=${id}`);
};

const handleNew = () => {
  history.push('/interview/create');
};

export default () => (
  <ProList<GithubIssueItem>
    split={true}
    toolBarRender={() => {
      return [
        <Button key="3" type="primary" onClick={handleNew}>
          新建
        </Button>,
      ];
    }}
    search={{
      filterType: 'light',
    }}
    onItem={(record: any) => {
      return {
        onClick: () => {
          handle(record);
        },
      };
    }}
    rowKey="id"
    headerTitle="面经列表"
    request={async (params = {}) =>
      request<{
        data: GithubIssueItem[];
      }>('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    pagination={{
      pageSize: 10,
    }}
    showActions="hover"
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
);
