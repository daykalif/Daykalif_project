import { ReactNode } from "react";
import { Button } from 'antd';

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  return (
    <div style={{ color: 'red' }}>
      layout组件下使用antd组件库
      {props.children}
      <Button type='dashed'>Primary</Button>
      <Button type='primary'>Primary</Button>
    </div>
  );
}

export default Index;
