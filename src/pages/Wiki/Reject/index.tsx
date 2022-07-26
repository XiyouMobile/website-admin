import React from 'react';
import { history } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag, notification } from 'antd';
import './index.less';

const dataSource = [
  {
    id: '1331',
    title: '语雀的空',
    content: 'asdasdsad',
    extra: {
      name: 'sdsd',
      imgUrl: 'http://www.xiyoustudent.cn:4000/img/img-1658497459858.png',
    },
    description: {
      username: '黄欲烈',
      group: 'web',
      state: '未通过审核',
    },
  },
  {
    id: '123123',
    title: '语雀的空',
    content: 'asdasdsad',
    extra: {
      name: 'sdsd',
      imgUrl: 'http://www.xiyoustudent.cn:4000/img/img-1658497459858.png',
    },
    description: {
      username: '黄欲烈',
      group: 'web',
      state: '未通过审核',
    },
    actions: {
      stars: 5,
      favorites: 7,
      comments: 8,
    },
  },
];

const Reject: React.FC = (): React.ReactElement => {
  const HandleOnClick = () => {
    history.push('/wiki/create');
  };

  const openNotification = (e: any) => {
    const { id } = e;
    console.log(id);

    const args = {
      message: `审核人:${'黄欲烈'}`,
      description: `写的太垃圾了`,
      btn: <Button>点击返回编辑</Button>,
      onClick: () => {
        history.push(`/wiki/nopass/id=${id}`);
      },
    };
    notification.open(args);
  };

  return (
    <PageHeaderWrapper>
      <ProList
        split={true}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        toolBarRender={() => {
          return [
            <Button key="3" type="primary" onClick={HandleOnClick}>
              新建
            </Button>,
          ];
        }}
        itemLayout="vertical"
        rowKey="id"
        headerTitle="我的文章"
        dataSource={dataSource}
        onItem={(record: any) => {
          return {
            onClick: () => {
              openNotification(record);
            },
          };
        }}
        metas={{
          title: {},
          description: {
            render: (item: any) => (
              <>
                <Tag>{item.username}</Tag>
                <Tag>{item.group}</Tag>
                <Tag color="magenta">{item.state}</Tag>
              </>
            ),
          },
          extra: {
            render: (item: { name: string; imgUrl: string }) => {
              return (
                <>
                  <img width={100} alt={item.name} src={item.imgUrl} />
                </>
              );
            },
          },
          content: {
            render: (item) => {
              return <div>{item}</div>;
            },
          },
        }}
      />
    </PageHeaderWrapper>
  );
};

export default Reject;
