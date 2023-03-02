import { ReactNode } from "react";
import { Button } from 'antd';
import { useHistory } from "umi";

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  const history = useHistory();

  return (
    <div style={{ color: 'red' }}>
      layout组件下使用antd组件库
      <br />
      <Button type='dashed' onClick={() => history.push('/demo/user')}>点击跳转到/demo/user路由</Button>
      <Button type='primary'>Primary</Button>
      <hr />
      {props.children}
    </div>
  );
}

export default Index;
