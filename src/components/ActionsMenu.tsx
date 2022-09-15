import { FC, useRef, useState } from 'react';
import EllipsisIcon from './EllipsisIcon';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import MenuItem, { MenuItemProps } from './MenuItem';
import useClickOutside from '../hooks/useClickOutside';

interface ActionsMenuProps {
  items: MenuItemProps[];
}

const ActionsMenu: FC<ActionsMenuProps> = ({
  items,
}) => {
  const [ opened, setOpened ] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpened(false));

  return (
    <DropdownButton
      role="button"
      onClick={() => setOpened(!opened)}
      tabIndex={0}
    >
      <EllipsisIcon />
      {opened && (
        <DropdownMenu
          role="menu"
          ref={ref}
        >
          {items.map((item, key) => (
            <MenuItem
              onClick={item.onClick}
              icon={item.icon}
              label={item.label}
              key={key}
            />
          ))}
        </DropdownMenu>
      )}
    </DropdownButton>
  );
}

export default ActionsMenu;
