import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({
  onClick,
  icon,
  label,
}) => (
  <MenuItemElement
    onClick={onClick}
    role="menuitem"
  >
    {icon}
    {label}
  </MenuItemElement>
);

const MenuItemElement = styled.div`
  font-size: 14px;
  white-space: nowrap;
  padding: 10px 16px;
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &:hover {
    background-color: var(--color-gray-50);    
  }
  & > span {
    display: inline-block;
    width: 20px;
  }
`;

export default MenuItem;
