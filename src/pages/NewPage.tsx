import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProCard } from '@ant-design/pro-components';
import Information from '../components/Information/Information';

const NewPage: React.FC = () => {
  return (
    <PageHeaderWrapper content={' 查看个人'}>
      <ProCard style={{ marginTop: 8 }} gutter={8} title="个人详情" wrap>
        <ProCard colSpan={{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }} layout="center" bordered>
          <Information />
        </ProCard>
        <ProCard
          colSpan={{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16 }}
          layout="center"
          bordered
          tabs={{
            type: 'card',
          }}
        >
          <ProCard.TabPane key="tab1" tab="wiki统计">
            内容一
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="面经统计">
            内容二
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
      {/* <ProCard style={{ marginTop: 8 }} gutter={8} title="指定宽度px">
        <ProCard
          colSpan={{
            xs: '50px',
            sm: '100px',
            md: '200px',
            lg: '300px',
            xl: '400px',
          }}
          layout="center"
          bordered
        >
          Col
        </ProCard>
        <ProCard layout="center" bordered>
          Auto
        </ProCard>
      </ProCard>

      <ProCard style={{ marginTop: 8 }} gutter={8} title="指定宽度百分比">
        <ProCard layout="center" bordered>
          Auto
        </ProCard>
        <ProCard
          layout="center"
          colSpan={{
            xs: '10%',
            sm: '20%',
            md: '30%',
            lg: '40%',
            xl: '50%',
          }}
          bordered
        >
          Col - 百分比
        </ProCard>
      </ProCard> */}
    </PageHeaderWrapper>
  );
};

export default NewPage;
