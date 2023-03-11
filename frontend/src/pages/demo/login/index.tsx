import { Form, Input, Button, Message, InputNumber } from '@arco-design/web-react';
import { useDispatch, useHistory } from 'umi';
import "@arco-design/web-react/dist/css/arco.css";
import { doLogin, doMockLogin } from '@/api/user/user';
import HtmlLoginPage from './htmlLoginPage';
import decode from 'jwt-decode';

const FormItem = Form.Item;

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (user: API.IUser) => {
    doLogin(user).then(response => {
      console.log('login response===>', response);

      if (response.status === 501) {
        Message.error(response.msg);
        return dispatch({
          type: 'login/setErrorMsg',
          payload: response.msg,
        });
      }
      // 同步用户状态和用户信息
      dispatch({
        type: 'login/loginReducer',
        payload: decode(response.token),
      });
      // 跳转首页
      return history.push('/');
    });
  }

  return (
    <Form
      form={form}
      autoComplete='off'
      style={{ width: 600 }}
      onSubmit={login}
    >
      <FormItem
        label='用户名'
        field='username'
        required
      >
        <Input type='text' placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        label='密码'
        field='password'
      >
        <Input type='password' placeholder='请输入密码' />
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
