import { ReactNode } from "react";
import { Button } from 'antd';
import { useHistory, IRouteComponentProps } from "umi";

const Index = (props: IRouteComponentProps) => {
  const history = useHistory();
  // 你可能需要针对不同路由输出不同的全局 layout，Umi 不支持这样的配置;
  // 但你仍可以在 src/layouts/index.tsx 中对 location.path 做区分，渲染不同的 layout 。
  if (props.location.pathname === '/demo/product') {
    return <div>{props.children}</div>
  }

  return (
    <div style={{ color: '#e92' }}>
      <div>这里展示layout组件下使用antd组件库,所有的文件都会展示这个组件</div>
      <br />
      <Button type='dashed' onClick={() => history.push('/demo/user')}>点击跳转到/demo/user路由</Button>
      <Button type='primary'>Primary</Button>
      <hr />
      {props.children}
    </div>
  );
}

export default Index;
