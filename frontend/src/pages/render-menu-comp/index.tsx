import { useState } from 'react';
import { Menu, Trigger } from '@arco-design/web-react';
import { IconMessage, IconClose, IconBug, IconBulb } from '@arco-design/web-react/icon';
import './index.less';

const MenuItem = Menu.Item;

function RenderMenuComp() {
  const renderMenu = () => {
    return (
      <Menu
        style={{ marginBottom: -4 }}
        mode='popButton'
        tooltipProps={{ position: 'left' }}
        hasCollapseButton
      >
        <MenuItem key='1'>
          <IconBug />
          Bugs
        </MenuItem>
        <MenuItem key='2'>
          <IconBulb />
          Ideas
        </MenuItem>
      </Menu>
    );
  };

  const [popupVisibleTwo, setPopupVisibleTwo] = useState(false);
  return (
    <div>
      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position='top'
        onVisibleChange={(v) => setPopupVisibleTwo(v)}
      >
        <div className={`button-trigger ${popupVisibleTwo ? 'button-trigger-active' : ''}`}>
          {popupVisibleTwo ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>
    </div>
  );
}

export default RenderMenuComp;
