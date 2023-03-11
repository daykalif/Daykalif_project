import { Button } from '@arco-design/web-react';
import { useHistory } from 'umi';

import styles from './index.less';
import MenuLayout from './menu-layout';
import RenderMenuComp from './render-menu-comp';

export default function IndexPage() {
  const history = useHistory();

  return (
    <div>
      <h1 className={styles.title}>这里是Pages index</h1>
      <Button type='dashed' onClick={() => history.push('/demo')}>点击跳转到/demo路由</Button>
      <MenuLayout />
      <RenderMenuComp />
    </div>
  );
}
