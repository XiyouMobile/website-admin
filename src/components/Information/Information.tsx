import React from 'react';
import { Avatar, Image } from 'antd';
import { DingtalkOutlined } from '@ant-design/icons';

import './Information.less';

const Information: React.FC = () => {
  return (
    <div className="information">
      <Avatar
        size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
        src={
          <Image
            src="http://xiyoustudent.cn:4000/img/004.jpg"
            style={{ height: '100%', width: '100%' }}
          />
        }
        style={{ border: '2px black solid', boxSizing: 'border-box' }}
      />
      <div className="name">黄欲烈</div>
      <div className="sign">大佬尽在我身边</div>
      <div className="information_label">
        <div className="information_s">
          <div className="information_label">
            <DingtalkOutlined />
            组别:web
          </div>
          <div className="information_label">
            <DingtalkOutlined />
            入学年:2020
          </div>
          <div className="information_label">
            <DingtalkOutlined />
            毕业去向:无
          </div>
          <div className="information_label">
            <DingtalkOutlined />
            电话号码:19991396321
          </div>
          <div className="information_label">
            <DingtalkOutlined />
            一共发了:1篇wiki
          </div>
          <div className="information_label">
            <DingtalkOutlined />
            一共发了:1篇面经
          </div>
        </div>
      </div>
      <div className="label">
        <div className="sex">
          <span className="sex_1">男</span>
        </div>
        <div className="group">
          <span className="group_1">web</span>
        </div>
        <div className="school">
          <span className="school">在校 </span>
        </div>
      </div>
    </div>
  );
};

export default Information;
