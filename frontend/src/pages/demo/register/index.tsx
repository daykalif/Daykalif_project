import { Form, Input, Button, InputNumber } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import { doRegister } from '@/api/user/user';
import { useDispatch, useHistory, useSelector } from 'umi';
import { useEffect } from 'react';

const FormItem = Form.Item;

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector((state: any) => state.register.errMsg);
  useEffect(() => {
    form.setFields({
      [data[0]]: {
        error: {
          message: data[1]
        },
      }
    });
  }, [data]);

  const onRegister = (user: API.IUser) => {
    doRegister(user).then(response => {
      console.log('register responst----->', user, response);
      if (response.status === 501) {
        return dispatch({
          type: 'register/setErrorMsg',
          payload: response.msg,
        });
      }
      dispatch({
        type: 'register/registerReducer',
        payload: user,
      });
      return history.push('/login');
    });
  }

  return (
    <Form
      form={form}
      autoComplete='off'
      style={{ width: 600 }}
      onSubmit={onRegister}
    >
      <FormItem
        label='用户名'
        field='username'
        required
      >
        <Input type='text' placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        label='邮箱'
        field='email'
        required
      >
        <Input type='text' placeholder='请输入邮箱' />
      </FormItem>
      <FormItem
        label='密码'
        field='password'
        required
      >
        <Input type='password' placeholder='请输入密码' />
      </FormItem>
      <FormItem
        label='确认密码'
        field='passwordConfirm'
        required
      >
        <Input type='password' placeholder='请再次输入密码' />
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
