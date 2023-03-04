import { Form, Input, Button, Message, InputNumber } from '@arco-design/web-react';
import { useHistory } from 'umi';
import "@arco-design/web-react/dist/css/arco.css";
import { doLogin } from '@/api/user/user';
const FormItem = Form.Item;

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const login = (user: API.IUser) => {
    doLogin(user).then(response => {
      console.log('由于没有数据库用户名密码校验，因此code返回值随机返回0/1==>', response);
      if (response.code === 0) {  // code:0 表示登陆成功
        history.push('/');
      } else {
        Message.error('登录失败');  // code:1 表示登陆失败
      }
    })
  }

  return (
    <Form
      form={form}
      autoComplete='off'
      style={{ width: 600 }}
      validateMessages={{
        required: (_, { label }) => `必须填写 ${label}`,
        string: {
          length: `字符数必须是 #{length}`,
          match: `不匹配正则 #{pattern}`,
        },
        number: {
          min: `最小值为 #{min}`,
          max: `最大值为 #{max}`,
        },
      }}
      onSubmit={login}
    >
      <FormItem
        label='用户名'
        field='name'
        required
        rules={[
          {
            type: 'string',
            required: true,
            length: 3,
            match: /abc/,
          },
        ]}
      >
        <Input placeholder='abc' />
      </FormItem>
      <FormItem
        label='密码'
        field='age'
        rules={[
          {
            required: true,
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber placeholder='12' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
          Validate
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          Reset
        </Button>
      </FormItem>
    </Form>
  );
}

export default Login;
