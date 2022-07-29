import React from 'react';
import { history } from 'umi';
import { Button, Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import './index.less';

const Reject: React.FC = (): React.ReactElement => {
  const handle = () => {
    history.go(-1);
  };

  const a =
    'hello md-editor-rt\n### dsadsad\n#\n## dsadas\n# sda\n\n### dsad\n3213\n```\ndasdsadsadqweq\n```';
  return (
    <PageHeaderWrapper>
      <Card
        title="文章名"
        extra={
          <>
            <Button onClick={handle}>返回</Button>&nbsp;
          </>
        }
      >
        <MdEditor previewOnly modelValue={a} previewTheme="cyanosis" className="md5" />
      </Card>
    </PageHeaderWrapper>
  );
};

export default Reject;
