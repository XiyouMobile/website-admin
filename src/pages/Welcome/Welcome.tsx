import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  console.log(initialState);

  return (
    <PageContainer>
      <Card>
        <CodePreview>欢迎使用移动开发应用实验室管理端!!</CodePreview>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
