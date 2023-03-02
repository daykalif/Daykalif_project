import { Button } from '@arco-design/web-react';
import _ from 'lodash'
import { add } from 'lodash/fp'
import { useEffect } from 'react';
import { useHistory } from 'umi';

import styles from './index.less';
import MenuLayout from './menu-layout';
import RenderMenuComp from './render-menu-comp';

export default function IndexPage() {
  const history = useHistory();

  useEffect(() => {
    const addOne = add(5);
    const lodash_test = _.map([1, 2, 3], addOne);
    console.log(lodash_test);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>这里是Pages index</h1>
      <Button type='dashed' onClick={() => history.push('/demo')}>点击跳转到/demo路由</Button>
      <MenuLayout />
      <RenderMenuComp />
    </div>
  );
}
