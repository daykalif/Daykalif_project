import { Fragment, useEffect } from "react";
import { Avatar, Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import { IRouteComponentProps, useSelector, useDispatch } from "umi";
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


  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: (
        <Button type="link" onClick={() => {
          localStorage.removeItem('DAYKALIF-TOKEN');
          dispatch({
            type: 'login/logoutReducer',
            payload: {},
          });
        }}>退出</Button>
      ),
    }
  ];

  return (
    <Fragment>
      <Avatar
        className="a-mb-sm"
        src="https://joesch.moe/api/v1/random?key=1"
      />
      {isAuth && (
        <Dropdown menu={{ items }} placement="bottomRight">
          <span className="a-ml-sm">{user.username}</span>
        </Dropdown>
      )}
    </Fragment>
  );
}

export default RightContentRender;