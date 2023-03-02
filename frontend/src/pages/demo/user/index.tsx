import { Button } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import { Link, useHistory, useModel } from 'umi';


const Index = () => {
  const history = useHistory();
  // 供全局变量使用
  const { initialState } = useModel('@@initialState');

  // 自定义model
  const { user, signin, signout } = useModel('user', model => ({
    user: model.user,
    signin: model.signin,
    signout: model.signout,
  }));

  return (
    <div style={{ border: '1px solid #e53fff', color: '#33e' }}>
      <h6>user组件下使用arco pro组件库</h6>
      <br />
      {initialState?.mode}
      <br />
      {user?.name}
      <br />
      {user?.password}
      <br />
      <Button type='dashed' onClick={() => history.push('/demo/user')}>user组件--点击跳转到/demo/user路由</Button>
      <Button type='primary' onClick={() => signin('daykalif_name', 'daykalif_password')}>登陆</Button>
      <Button type='primary' onClick={signout}>退出</Button>
      <Link to="/demo/user">user组件--Link方式跳转到/demo/user路由</Link>
      <Button type='dashed' onClick={() => history.push('/demo/sankey')}>user组件--点击跳转到/demo/sankey路由</Button>
    </div>
  );
}

export default Index;