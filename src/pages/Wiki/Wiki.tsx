import { useRef, useState } from 'react';
import { Form, Input, message, Modal, Radio } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import EmojiExtension from '../../components/EmojiExtension/index';
import type { RadioChangeEvent } from 'antd';
import './wiki.scss';

interface IFrom {
  text: string;
  type: string;
  des: string;
  articleName: string;
}

const Wiki: React.FC = (): React.ReactElement => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const FormRef: any = useRef();

  const editorId = 'editor-preview';

  const [text, setText] = useState('hello md-editor-rt');
  const [type, setType] = useState('Web');
  const [des, setDes] = useState('无');

  const onFinish = (values: any) => {
    const data: IFrom = {
      ...values,
      text: text,
      type: type,
      des: des,
    };
    console.log('Success:', data);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log(errorInfo.errorFields[0].errors[0]);

    message.error(errorInfo.errorFields[0].errors[0]);
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setText(text);
    FormRef.current!.submit();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };

  const onChangeText = (e: any) => {
    setDes(e.target.value);
    console.log(e.target.value);
  };
  const onHtmlChanged = (h: string) => {
    console.log(h);
  };

  return (
    <PageHeaderWrapper>
      <Form
        ref={FormRef}
        name="basic"
        initialValues={{
          text,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <div onClick={showModal}>Submit</div>
        </Form.Item>
        <Form.Item
          label="文章标题"
          name="articleName"
          rules={[{ required: true, message: '请输入你的文章标题' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Form.Item name="text">
            <MdEditor
              modelValue={text}
              onChange={(value) => setText(value)}
              editorId={editorId}
              onHtmlChanged={(h: string) => {
                onHtmlChanged(h);
              }}
              defToolbars={[
                <EmojiExtension
                  editorId={editorId}
                  onChange={(value) => setText(value)}
                  key="emoji-extension"
                />,
              ]}
              toolbars={[
                'bold',
                'underline',
                'italic',
                'strikeThrough',
                '-',
                'title',
                'sub',
                'sup',
                'quote',
                'unorderedList',
                'orderedList',
                '-',
                'codeRow',
                'code',
                'link',
                'image',
                'table',
                'mermaid',
                'katex',
                0,
                '-',
                'revoke',
                'next',
                'save',
                '=',
                'prettier',
                'pageFullscreen',
                'fullscreen',
                'preview',
                'htmlPreview',
                'catalog',
              ]}
            />
          </Form.Item>
        </Form.Item>
      </Form>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        文章类型：
        <Radio.Group onChange={onChange} defaultValue="Web">
          <Radio.Button value="Web">Web</Radio.Button>
          <Radio.Button value="iOS">iOS</Radio.Button>
          <Radio.Button value="Android">Android</Radio.Button>
          <Radio.Button value="Server">Server</Radio.Button>
        </Radio.Group>
        <br />
        描述:
        <Input placeholder="不多于100个字" onChange={onChangeText} />
      </Modal>
    </PageHeaderWrapper>
  );
};

export default Wiki;
