import { AndroidOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = 'WEB组黄欲烈测试中';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '移动开发移动应用实验室',
          href: 'https://mobile.xupt.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <AndroidOutlined />,
          href: 'https://github.com/XiyouMobile/website-admin',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '3G',
          href: 'https://mobile.xupt.edu.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
