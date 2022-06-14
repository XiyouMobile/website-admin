import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import request from 'umi-request';

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

const valueEnum = {
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
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户',
    dataIndex: 'title',
    copyable: true,
    search: false,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    disable: true,
    search: false,
    align: 'center',
    title: '金额',
    sorter: (a, b) => {
      return a.id - b.id;
    },
    dataIndex: 'id',
    filters: true,
    onFilter: true,
  },
  {
    disable: true,
    align: 'center',
    title: '时间',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    hideInTable: true,
    valueType: 'select',
    valueEnum: valueEnum,
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        return request<{
          data: GithubIssueItem[];
        }>('https://proapi.azurewebsites.net/github/issues', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="捐款信息"
    />
  );
};
