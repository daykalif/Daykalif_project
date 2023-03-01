import { ReactNode } from "react";
import { Button } from 'antd';

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  return (
    <div style={{ color: 'red' }}>
      layout组件下使用antd组件库
      <br />
      <Button type='dashed'>Primary</Button>
      <Button type='primary'>Primary</Button>
      <hr />
      {props.children}
    </div>
  );
}

export default Index;
