import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const NewPage: React.FC = (): React.ReactElement => {
  return (
    <PageHeaderWrapper content={' 这个页面只有 admin 权限才能查看'}>
      <div>213</div>
    </PageHeaderWrapper>
  );
};

export default NewPage;
