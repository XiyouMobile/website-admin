import React from 'react';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import './index.less';

const Reject: React.FC = (): React.ReactElement => {
  return (
    <PageHeaderWrapper>
      <Card
        title="文章名"
        extra={
          <div className="img">
            <img src="http://xiyoustudent.cn:4000/img/img-1653223987608.jpg" />
          </div>
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
