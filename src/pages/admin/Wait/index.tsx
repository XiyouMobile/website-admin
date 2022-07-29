import React from 'react';
import { history } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag, Image } from 'antd';
import './index.less';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);
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
      state: '待审核',
    },
    actions: {
      stars: 5,
      favorites: 7,
      comments: 8,
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
      state: '待审核',
    },
    actions: {
      stars: 5,
      favorites: 7,
      comments: 8,
    },
  },
];

const NewPage: React.FC = (): React.ReactElement => {
  const HandleOnClick = () => {
    history.push('/wiki/create');
  };

  const handle = (e: any) => {
    const { id } = e;
    history.push(`/admin/wiki/uncensored/id=${id}`);
  };
  return (
    <PageHeaderWrapper content={' 这个页面只有 admin 权限才能查看'}>
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
              handle(record);
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
                <Tag color="yellow">{item.state}</Tag>
              </>
            ),
          },
          actions: {
            render: (item: any) => {
              const { stars, favorites, comments } = item.props.text;
              return (
                <>
                  <IconText icon={StarOutlined} text={stars} key="list-vertical-star-o" />
                  &nbsp; &nbsp; &nbsp;
                  <IconText icon={LikeOutlined} text={favorites} key="list-vertical-like-o" />
                  &nbsp; &nbsp; &nbsp;
                  <IconText icon={MessageOutlined} text={comments} key="list-vertical-message" />
                  &nbsp; &nbsp; &nbsp;
                </>
              );
            },
          },
          extra: {
            render: (item: { name: string; imgUrl: string }) => {
              return (
                <>
                  <Image width={100} alt={item.name} src={item.imgUrl} />
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

export default NewPage;
