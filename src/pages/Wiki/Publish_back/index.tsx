import React from 'react';
import { history } from 'umi';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Card, message, Modal } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import './index.less';
const { confirm } = Modal;

const Reject: React.FC = (): React.ReactElement => {
  const showPromiseConfirm = () => {
    confirm({
      title: '你确定删除这篇文章吗?',
      icon: <ExclamationCircleOutlined />,
      content: '它并不会立即删除，而是存放在已删除回收站里',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => {
          console.log('已删除');
          history.push('/wiki/publish');
          message.success('已删除');
        });
      },
      onCancel() {},
    });
  };

  const handle = () => {
    history.go(-1);
  };
  return (
    <PageHeaderWrapper>
      <Card
        title="文章名"
        extra={
          <>
            <Button onClick={handle}>返回</Button>&nbsp;
            <Button onClick={showPromiseConfirm} danger>
              删除
            </Button>
          </>
        }
      >
        <MdEditor
          previewOnly
          modelValue={'# 日记\n我是傻逼'}
          previewTheme="cyanosis"
          className="md5"
        />
      </Card>
    </PageHeaderWrapper>
  );
};

export default Reject;
