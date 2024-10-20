import { Select, Space, Tag, Button, Form, Input, Popconfirm } from 'antd';
import { useState } from 'react';
import './proxy.css'
import { t } from '../../common/fun';

function GProxy(props) {
  const [isCreate, setIsCreate] = useState(false)
  const [form] = Form.useForm()
  const {proxyList, selectProxy, onProxyChange, onProxyDelete, onProxyCreate, deleteComfirm, label, color='#f50'} = props

  let hasDelete = false;

  return (
    <Space style={{ marginTop: '15px' }}>
      {
        !isCreate && <Space>
          <div>{label}</div>
          <Select
            size='middle'
            value={selectProxy}
            style={{
              width: 350,
            }}
            onChange={(proxy) => {
              if (hasDelete) {
                hasDelete = false;
                return
              };
              onProxyChange({
                proxy
              })
            }}
            labelRender={({ label }) => {
              return label && <Tag size='middle' color={color}>{label}</Tag>
            }}
            options={proxyList.map(item => ({
              label: `${item.name}(${item.proxy})`,
              value: item.proxy
            }))}
            optionRender={(item) => {
              return <div className="proxy-item" style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  overflow: 'auto',
                }}>
                  {item.label}
                </div>
                <div>
                {
                  deleteComfirm && <Popconfirm
                  title={t('请确认')}
                  description={t('是否删除该代理')}
                  onConfirm={() => {
                    onProxyDelete({proxy: item.value});
                  }}
                  okText={t('删除')}
                  cancelText={t('取消')}
                >
                  <Button className='proxy-delete' size='small' onClick={(event) => {
                    event.stopPropagation()
                    hasDelete = true;
                  }} danger>{t('删除')}</Button>
                </Popconfirm>
                }
                {
                  !deleteComfirm && <Button size='small' className='proxy-delete' onClick={(event) => {
                    event.stopPropagation()
                    onProxyDelete({proxy: item.value});
                    hasDelete = true;
                  }} danger>{t('删除')}</Button>
                }
                  
                </div>
              </div>
            }}
          />
        </Space>
      }

      {
        isCreate && <Form
          layout='inline'
          form={form}
          onFinish={(value) => {
            onProxyCreate({
              proxy: value.proxy,
              name: value.name || 'proxy',
            })
            setIsCreate(false)
            form.resetFields()
          }}
        >
          <Form.Item name='name' label={t('名称')}>
            <Input size='middle' placeholder={t('请输入代理的名称')} />
          </Form.Item>
          <Form.Item
            label={t('代理')}
            name='proxy'
            rules={[
              {
                required: true,
                message: t('请输入代理地址')
              },
              {
                pattern: /^(http|https):\/\/.+$/,              
                message: t('请输入正确的代理地址')
              },
              {
                validator: (rule, val) => {
                  return proxyList.find(item => item.proxy === val) ? Promise.reject(t('代理地址已存在')) : Promise.resolve()
                }
              }
            ]}
          >
            <Input size='middle' style={{width: '300px'}} placeholder="http://127.0.0.1:8800" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size='middle' htmlType="submit">{t('创建')}</Button>
          </Form.Item>
          <Form.Item>
            <Button size='middle' danger onClick={() => {
              form.resetFields()
              setIsCreate(false)
            }}>
              {t('取消')}
            </Button>
          </Form.Item>
        </Form>
      }

     {
       !isCreate && <Button onClick={() => setIsCreate(true)} color="primary" size='middle' variant="outlined">
       {t('新增')}
     </Button>
     }
    </Space>
  );
}

export default GProxy;