import { Form, Input, Button, Message, InputNumber } from '@arco-design/web-react';
import { useHistory } from 'umi';
import "@arco-design/web-react/dist/css/arco.css";
import { doRegister } from '@/api/user/user';

const FormItem = Form.Item;

function Login() {
  const [form] = Form.useForm();
  const history = useHistory();

  const register = (user: API.IUser) => {
    doRegister(user).then(response => {
      console.log('register responst----->', user, response);
      history.push('/login');
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
      onSubmit={register}
    >
      <FormItem
        label='用户名'
        field='username'
        required
      >
        <Input placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        label='邮箱'
        field='email'
        required
      >
        <Input placeholder='请输入邮箱' />
      </FormItem>
      <FormItem
        label='密码'
        field='password'
        required
      >
        <InputNumber placeholder='请输入密码' />
      </FormItem>
      <FormItem
        label='确认密码'
        field='passwordConfirm'
        required
      >
        <InputNumber placeholder='请再次输入密码' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
          注册
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          重置
        </Button>
      </FormItem>
    </Form>
  );
}

export default Login;
