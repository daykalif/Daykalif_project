import { ReactNode } from "react";
import { Button } from 'antd';
import { useHistory, Redirect, useSelector } from "umi";

interface IProps {
  children?: ReactNode
}

const Index = (props: IProps) => {
  const history = useHistory();
  const { isAuth } = useSelector((state: any) => state.login);

  if (isAuth) {
    return (
      <div>
        <div style={{ color: '#a23' }}>
          <div>这里是wrapper的内容</div>
          <Button type='dashed' onClick={() => history.push('/demo/userInfo')}>点击跳转到/demo/userInfo路由</Button>
        </div>
        <hr />
        {props.children}
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default Index;
