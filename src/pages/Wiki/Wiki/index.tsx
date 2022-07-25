import { useRef, useState } from 'react';
import { Form, Input, message, Modal, Radio, Button, Upload } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import MdEditor from 'md-editor-rt';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import axios from 'axios';
import EmojiExtension from '../../../components/EmojiExtension/index';
import ReadExtension from '../../../components/ReadExtension/index';
import type { RadioChangeEvent } from 'antd';
import moment from 'moment';
import 'md-editor-rt/lib/style.css';
import './index.less';

interface IFrom {
  text: string;
  type: string;
  des: string;
  articleName: string;
  imgUrl: string;
}

const Wiki: React.FC = (): React.ReactElement => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const FormRef: any = useRef();

  const editorId = 'editor-preview';

  // const myRef: any = useRef();

  const [text, setText] = useState('hello md-editor-rt');
  const [type, setType] = useState('Web');
  const [des, setDes] = useState('无');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'http://xiyoustudent.cn:4000/img/img-1653223987608.jpg',
    },
  ]);
  const [flag, setFlag] = useState(true);

  const onFinish = (values: any) => {
    const data: IFrom = {
      ...values,
      text: text,
      type: type,
      des: des,
      imgUrl: 'http://xiyoustudent.cn:4000/img/img-1653223987608.jpg',
      date: moment().format('YYYY年MM月DD日 HH:mm:ss'),
    };
    if (flag) {
      console.log('提交');
    } else {
      console.log('草稿');
    }
    message.success('提交成功');
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
    setFlag(true);
    FormRef.current!.submit();
    setIsModalVisible(false);
  };

  const handleDraft = () => {
    setText(text);
    setFlag(false);
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

  const onChangeimg: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
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
        <Form.Item>
          <Button size="large" id="wiki_button" onClick={showModal}>
            发布
          </Button>
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
      <Modal
        title="文章发布"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="发布"
        footer={
          <>
            <Button onClick={handleDraft}>存至草稿箱</Button>
            <Button onClick={handleOk} type="primary">
              发布
            </Button>
          </>
        }
      >
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
        <ImgCrop rotate>
          <Upload
            action="http://150.158.23.19:4000/img/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChangeimg}
            onPreview={onPreview}
            name="img"
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
        <br />
        描述:
        <Input placeholder="不多于100个字" onChange={onChangeText} />
      </Modal>
      {/* <MdEditor previewOnly modelValue={text} previewTheme="cyanosis" className="md5" /> */}
    </PageHeaderWrapper>
  );
};

export default Wiki;
