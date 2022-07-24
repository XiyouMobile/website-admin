import { useRef, useState } from 'react';
import { Form, Input, message, Modal, Radio } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import axios from 'axios';
import EmojiExtension from '../../components/EmojiExtension/index';
import ReadExtension from '../../components/ReadExtension/index';
import type { RadioChangeEvent } from 'antd';
import Upload from '../../components/Upload/Upload';
import 'md-editor-rt/lib/style.css';
import './wiki.less';

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

  // const myRef: any = useRef();

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
  // 图片上传
  const onUploadImg = async (files: any, callback: any) => {
    const res = await Promise.all(
      files.map((file: any) => {
        return new Promise((rev, rej) => {
          const form = new FormData();
          form.append('img', file);
          axios
            .post('http://150.158.23.19:4000/img/upload', form, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((response: any) => rev(response))
            .catch((error) => rej(error));
        });
      }),
    );

    callback(
      res.map((item) => {
        message.success('上传成功!');
        return item.data.data.url;
      }),
    );
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
              onUploadImg={onUploadImg}
              modelValue={text}
              onChange={(value) => setText(value)}
              editorId={editorId}
              onHtmlChanged={(h: string) => {
                onHtmlChanged(h);
              }}
              previewTheme="cyanosis"
              defToolbars={[
                <EmojiExtension
                  editorId={editorId}
                  onChange={(value) => setText(value)}
                  key="emoji-extension"
                />,
                <ReadExtension mdText={text} key="read-extension" />,
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
                1,
                '-',
                'revoke',
                'next',
                'save',
                '=',
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
        <br />
        <Radio.Group onChange={onChange} defaultValue="Web">
          <Radio.Button value="Web">Web</Radio.Button>
          <Radio.Button value="iOS">iOS</Radio.Button>
          <Radio.Button value="Android">Android</Radio.Button>
          <Radio.Button value="Server">Server</Radio.Button>
        </Radio.Group>
        <br />
        封面:
        <Upload />
        <br />
        描述:
        <Input placeholder="不多于100个字" onChange={onChangeText} />
      </Modal>
      <MdEditor previewOnly modelValue={text} previewTheme="cyanosis" className="md" />
    </PageHeaderWrapper>
  );
};

export default Wiki;
