import { Fragment, useEffect } from "react";
import { Space, Avatar } from 'antd';
import { IRouteComponentProps, useModel, useSelector, useDispatch } from "umi";
import decode from 'jwt-decode';

const RightContentRender = (props: IRouteComponentProps) => {
  const dispatch = useDispatch();
  const tk = localStorage.getItem('DAYKALIF-TOKEN');
  useEffect(() => {
    // 解析TOKEN并同步到数据管理
    if (tk) {
      try {
        dispatch({
          type: 'login/loginReducer',
          payload: decode(tk),
        });
      } catch (error) {
        localStorage.removeItem('DAYKALIF-TOKEN');
        window.location.href = '/login';
      }
    }
  }, [tk]);
  const { user, isAuth } = useSelector((state: any) => state.login);


  return (
    <Fragment>
      <Space size={22}>
        <Avatar
          className="a-mb-sm"
          src="https://joesch.moe/api/v1/random?key=1"
        />
        {isAuth && <span className="a-ml-sm">{user.username}</span>}
      </Space>
    </Fragment>
  );
}

export default RightContentRender;