import { ChangeEvent, KeyboardEvent, FC, useState } from "react";
import { Input } from 'antd';
import { useDispatch } from 'umi';


const Form: FC = () => {
  const [textValue, setTextValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.target.value);
  }

  const handleKeyUp = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' && textValue) {
      console.log(textValue);
      dispatch({
        type: 'todilist/add',
        payload: textValue,
      })
    }
  }

  return (
    <h3>
      <Input
        placeholder="Basic usage"
        value={textValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </h3>
  );
}

export default Form;