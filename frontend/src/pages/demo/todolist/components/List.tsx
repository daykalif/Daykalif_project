import { FC } from "react";
import { List } from 'antd';
import { useSelector, useDispatch } from 'umi';


const MyList: FC = (props) => {
  const data = useSelector((state: any) => state.todilist.data);
  console.log('data', data);

  const dispatch = useDispatch();


  const remove = (val: string) => {
    dispatch({
      type: 'todilist/remove',
      payload: val,
    })
  }

  return (
    <List
      size="small"
      bordered
      dataSource={data}
      renderItem={(item: string) => <List.Item onClick={() => remove(item)}>{item}</List.Item>}
    />
  );
}

export default MyList;