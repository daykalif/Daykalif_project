import { Form, Input, Message, Button, FormInstance } from '@arco-design/web-react';
import { useDispatch, useHistory } from 'umi';
import "@arco-design/web-react/dist/css/arco.css";
import { doLogin, doMockLogin } from '@/api/user/user';
import decode from 'jwt-decode';
import '../style.less';
import { useRef } from 'react';

const FormItem = Form.Item;

function Login() {
  const formRef = useRef<FormInstance<any, any, string | number | symbol>>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (user: API.IUser) => {
    doLogin(user).then(response => {
      console.log('login response===>', response);

      // 登陆失败
      if (response.status === 501) {
        Message.error(response.msg);
        return dispatch({
          type: 'login/setErrorMsg',
          payload: response.msg,
        });
      }

      // 存储TOKEN到本地
      localStorage.setItem('DAYKALIF-TOKEN', response.token);
      // 登陆成功，同步用户状态和用户信息
      dispatch({
        type: 'login/loginReducer',
        payload: decode(response.token),
      });
      // 跳转首页
      return history.push('/');
    });
  }

  const mockLogin = (user: API.IUser) => {
    doMockLogin(user).then(response => {
      console.log('login response===>', response);

      // 登陆失败
      if (response.status === 501) {
        Message.error(response.msg);
        return dispatch({
          type: 'login/setErrorMsg',
          payload: response.msg,
        });
      }

      // 存储TOKEN到本地
      localStorage.setItem('DAYKALIF-TOKEN', response.token);
      // 登陆成功，同步用户状态和用户信息
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
      className="login_form"
      ref={formRef}
      autoComplete='off'
    >
      <FormItem
        field='username'
        required
      >
        <Input type='text' className="form_input" placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        field='password'
      >
        <Input type='password' className="form_input" placeholder='请输入密码' />
      </FormItem>

      <FormItem>
        <a className="form_link">忘记密码？</a>
      </FormItem>

      <FormItem>
        <Button
          type='primary'
          className="form_button button"
          style={{ marginRight: 24 }}
          htmlType='submit'
          onClick={async () => {
            if (formRef.current) {
              const user = await formRef.current.validate();
              login(user);
            }
          }}
        >
          登录
        </Button>
        <Button
          className="form_button button"
          style={{ marginRight: 24 }}
          onClick={() => {
            formRef.current && formRef.current.resetFields();
          }}
        >
          重置
        </Button>
      </FormItem>
    </Form>
  );
}

export default Login;
