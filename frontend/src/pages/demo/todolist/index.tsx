import { FC } from "react";
import Form from "./components/Form";
import List from "./components/List";
import './index.less';

const TodoList: FC = (props) => {
  return (
    <div className="wrap">
      <h2>TodoList</h2>
      <Form />
      <List />
    </div>
  );
}

export default TodoList;