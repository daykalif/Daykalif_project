import { Button } from '@arco-design/web-react';
import { Alert } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useHistory, useSelector } from 'umi';
import decode from 'jwt-decode';

import styles from './index.less';
import MenuLayout from './menu-layout';
import RenderMenuComp from './render-menu-comp';

export default function IndexPage() {
  const history = useHistory();
  const { user, isAuth } = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const tk = localStorage.getItem('DAYKALIF-TOKEN');
    // 解析TOKEN并同步到数据管理
    if (tk) {
      dispatch({
        type: 'login/loginReducer',
        payload: decode(tk),
      });
    }
  }, []);

  return (
    <div>
      <h1 className={styles.title}>这里是Pages index</h1>
      {isAuth && <Alert message={<div>登陆成功，欢迎{user.username}</div>} type="success" closable />}
      <Button type='dashed' onClick={() => history.push('/demo')}>点击跳转到/demo路由</Button>
      <MenuLayout />
      <RenderMenuComp />
    </div>
  );
}
