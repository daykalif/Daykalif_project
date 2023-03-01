import _ from 'lodash'
import { add } from 'lodash/fp'
import { useEffect } from 'react';

import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    const addOne = add(5);
    const lodash_test = _.map([1, 2, 3], addOne);
    console.log(lodash_test);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
