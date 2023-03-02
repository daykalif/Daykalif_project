import { useSnapshot } from 'valtio';
import { store } from './data';

function CCC() {
  const stores = useSnapshot(store);
  return (
    <div>{stores.count}</div>
  )
}

export default CCC;