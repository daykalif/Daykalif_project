import { ReactNode } from "react";
import { Button } from 'antd';
import { useHistory } from "umi";

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  const history = useHistory();

  return (
    <div>
      <Button type='dashed' onClick={() => history.push('/demo/userInfo')}>点击跳转到/demo/userInfo路由</Button>
    </div>
  );
}

export default Index;
