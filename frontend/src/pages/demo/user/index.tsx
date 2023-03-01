import { Button } from '@arco-design/web-react';
import "@arco-design/web-react/dist/css/arco.css";
import { Link, useHistory } from 'umi';


const Index = () => {
  const history = useHistory();

  return (
    <div style={{ border: '1px solid #e53fff' }}>
      user组件下使用arco pro组件库
      <br />
      <Button type='dashed' onClick={() => history.push('/demo/user')}>点击跳转</Button>
      <Button type='primary'>Primary</Button>
      <Link to="/demo/user">Users Page</Link>
    </div>
  );
}

export default Index;