import { ProList } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';
import request from 'umi-request';
import './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

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

export default () => (
  <PageHeaderWrapper>
    <ProList<GithubIssueItem>
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            捐款
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
        pageSize: 20,
      }}
      metas={{
        title: {
          dataIndex: 'user',
          title: '用户',
          search: false,
        },
        description: {
          dataIndex: 'title',
          search: false,
        },
        actions: {
          render: (text, row) => [
            <Tag key="view" color="green">
              2000元{row.title}
            </Tag>,
          ],
          search: false,
        },
        status: {
          // 自己扩展的字段，主要用于筛选，不在列表中显示
          title: '时间',
          valueType: 'select',
          valueEnum: {
            all: { text: '全部', status: 'Default' },
            2022: {
              text: '2022',
              status: '2022',
            },
            2021: {
              text: '2021',
              status: '2021',
            },
            2020: {
              text: '2020',
              status: '2020',
            },
          },
        },
      }}
    />
  </PageHeaderWrapper>
);
