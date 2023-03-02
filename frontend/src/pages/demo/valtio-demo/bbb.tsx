import { Button } from '@arco-design/web-react';
import { addCount } from './data';

function BBB() {
  return (
    <div>
      <Button onClick={() => addCount(1)}>+1</Button>
    </div>
  )
}

export default BBB;