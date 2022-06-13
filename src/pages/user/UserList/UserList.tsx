import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import List from './List';

const UserList: React.FC = () => {
  return (
    <PageHeaderWrapper>
      <List />
    </PageHeaderWrapper>
  );
};

export default UserList;
