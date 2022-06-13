import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ProCard } from '@ant-design/pro-components';
import Information from '../../../components/Information/Information';
import { Image } from 'antd';
import './Myself.less';

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
          <ProCard.TabPane key="tab3" tab="照片统计">
            <ProCard gutter={18} className="tab3" wrap>
              <ProCard
                direction="column"
                colSpan={{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }}
                layout="center"
                bordered
              >
                <Image
                  width={'100%'}
                  height={'100%'}
                  src="http://xiyoustudent.cn:4000/img/004.jpg"
                />
                <div className="tab3_card">个人头像</div>
              </ProCard>
              <ProCard
                direction="column"
                colSpan={{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }}
                layout="center"
                bordered
              >
                <Image
                  width={'100%'}
                  height={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div className="tab3_card">风采照片</div>
              </ProCard>
              <ProCard
                direction="column"
                colSpan={{ xs: 24, sm: 24, md: 24, lg: 8, xl: 8 }}
                layout="center"
                bordered
              >
                <Image
                  width={'100%'}
                  height={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <div className="tab3_card">毕业照片</div>
              </ProCard>
            </ProCard>
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </PageHeaderWrapper>
  );
};

export default NewPage;
