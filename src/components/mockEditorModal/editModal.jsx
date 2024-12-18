import { Modal } from "antd";
import GProxy from "../proxy/proxy";
import { Form, Input } from 'antd'
import './editModal.css'
import MockEditor from "../mockEditor/mockEditor";
import { useCallback, useEffect, useState } from "react";
import { saveCustomProxyData, fetctApiItemDataAndMockData } from "../../api/api";
import { parseUrlToKey } from "../../common/fun";
import { t } from "../../common/fun";

const initMockData = {
  url: '',
  key: '',
  data: [
    {
      "name": `${t('请求参数')}1`,
      "requestData": {},
      "responseData": {}
    }
  ]
}

export default function ApiEdit(props) {
  const { onCancel, visible, targetKey, onApiDataChange, proxyList } = props;
  const [form] = Form.useForm();
  const [mockData, setMockData] = useState('');
  const [hasError, setHasError] = useState(false);
  const [customProxy, setCustomProxy] = useState([]);
  const [selectCustomProxy, setSelectCustomProxy] = useState('');

  const reset = useCallback(() => {
    setMockData('')
    setHasError(false)
    setCustomProxy([])
    setSelectCustomProxy('')
    form.resetFields()
  }, [])
  
  useEffect(() => {
    if (targetKey && visible) {
      fetctApiItemDataAndMockData({
        key: targetKey
      }).then(data => {
        if (data.mockData) {
          setMockData(data.mockData)
        }
        if (data.apiData) {
          form.setFieldsValue({
            name: data.apiData.name,
            url: data.apiData.url,
            duration: data.apiData.duration
          })
          setCustomProxy(data.apiData.customProxy)
          setSelectCustomProxy(data.apiData.selectCustomProxy || '')
        }
      })
    }
    if (!targetKey && visible) {
      setMockData(initMockData)
    }
  }, [targetKey, visible])

  useEffect(() => {
    if (!visible) {
      setMockData('')
    }
  }, [visible])


  return <Modal
    className="edit-modal"
    centered={true}
    onCancel={() => {
      onCancel()
      reset()
    }}
    title={t('MOCK数据&自定义代理')}
    okText={t('保存')}
    cancelText={t('取消')}
    onOk={() => {
      form.submit()
    }}
    open={visible}>
    <Form
      form={form}
      onFinish={async (value) => {
        mockData.url = value.url;
        mockData.key = parseUrlToKey(value.url);
        await saveCustomProxyData({
          ...value,
          mockData,
          customProxy,
          selectCustomProxy
        })
        onCancel()
        onApiDataChange()
        reset()
      }}
      style={{ width: ' 100%' }}
      layout="inline"
    >
      <Form.Item className="ant-form-mock-item" width="30%" name="name" layout="inline" label={t('名称')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item className="ant-form-mock-item" width="30%" name="url" layout="inline" label="URL" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item className="ant-form-mock-item" width="30%" name="duration" layout="inline" label={t('延时')}>
        <Input type="number" />
      </Form.Item>
    </Form>
    {
      visible && <GProxy
        color='#1677ff'
        label={`${t('自定义代理')}:`}
        deleteComfirm={true}
        proxyList={[...proxyList,...customProxy]}
        selectProxy={selectCustomProxy}
        onProxyChange={async ({proxy}) => {
          setSelectCustomProxy(proxy);
        }}
        onProxyDelete={async ({proxy}) => {
          const data = customProxy.filter(item => item.proxy !== proxy);
          setCustomProxy(data);
          if(proxy === selectCustomProxy) {
            setSelectCustomProxy(customProxy[0]?.proxy || '');
          }
          if (data.length === 0) {
            setSelectCustomProxy('');
          }
        }}
        onSaveProxy={async (data) => {
          setCustomProxy([...customProxy, data]);
          setSelectCustomProxy(data.proxy);
        }}
        hasEditFeature={false}
        showBindIcon={false} // 设置为false禁用绑定图标显示
      />
    }
    {
      mockData && <MockEditor visible={visible} value={mockData} onChange={setMockData} onStateChange={setHasError} />
    }
  </Modal>
}