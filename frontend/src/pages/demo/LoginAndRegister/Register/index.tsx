import { Form, Input, Button } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import { doRegister } from '@/api/user/user';
import { useDispatch, useHistory, useSelector } from 'umi';
import { useEffect } from 'react';

const FormItem = Form.Item;

function Register() {
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


      // 注册成功，切换至登录tab
      let switchCtn = document.querySelector("#switch-cnt");
      let switchC1 = document.querySelector("#switch-c1");
      let switchC2 = document.querySelector("#switch-c2");
      let switchCircle = document.querySelectorAll(".switch_circle");
      let aContainer = document.querySelector("#a-container");
      let bContainer = document.querySelector("#b-container");
      switchCtn?.classList.add("is-gx");
      setTimeout(function () {
        switchCtn?.classList.remove("is-gx");
      }, 1500)
      switchCtn?.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1?.classList.toggle("is-hidden");
      switchC2?.classList.toggle("is-hidden");
      aContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-z");
    });
  }

  return (
    <Form
      className="register_form"
      form={form}
      autoComplete='off'
      style={{ width: 600 }}
      onSubmit={onRegister}
    >
      <FormItem
        field='username'
        required
      >
        <Input type='text' className="form_input" placeholder='请输入用户名' />
      </FormItem>
      <FormItem
        field='email'
        required
      >
        <Input type='text' className="form_input" placeholder='请输入邮箱' />
      </FormItem>
      <FormItem
        field='password'
        required
      >
        <Input type='password' className="form_input" placeholder='请输入密码' />
      </FormItem>
      <FormItem
        field='passwordConfirm'
        required
      >
        <Input type='password' className="form_input" placeholder='请再次输入密码' />
      </FormItem>
      <FormItem>
        <Button
          type='primary'
          className="form_button button"
          style={{ marginRight: 24 }}
          htmlType='submit'
        >
          注册
        </Button>
        <Button
          className="form_button button"
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

export default Register;
