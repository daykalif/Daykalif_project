import { ReactNode } from "react";
import { Button } from 'antd';
import { useHistory } from "umi";

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  const history = useHistory();

  return (
    <div style={{ color: '#a23' }}>
      <div>这里是wrapper的内容</div>
      <Button type='dashed' onClick={() => history.push('/demo/userInfo')}>点击跳转到/demo/userInfo路由</Button>
    </div>
  );
}

export default Index;
