import { FunctionComponent, useMemo } from 'react';
import styled from 'styled-components';
import Editable from './Editable';
import useDispatch from '../hooks/useDispatch';
import { deleteCard, moveCardDown, moveCardLeft, moveCardRight, moveCardUp, renameCard } from '../state/boardActions';
import { Card } from '../types/Card.type';
import ActionsMenu from './ActionsMenu';
import { MenuItemProps } from './MenuItem';

type BoardCardProps = Card & {
  listId: number;
  cardPosition: number;
  listPosition: number;
  isListLast?: boolean;
  isCardLast?: boolean;
}

const BoardCard: FunctionComponent<BoardCardProps> = ({
  id,
  title,
  listId,
  cardPosition,
  listPosition,
  isListLast = false,
  isCardLast = false,
}) => {
  const dispatch = useDispatch();
  const cardActions = useMemo<MenuItemProps[]>(() => {
    const result = [];
    if (!isListLast) result.push({
      label: 'Move Right',
      icon: <span>&rarr;</span>,
      onClick: () => dispatch(moveCardRight(cardPosition, listPosition)),
    });
    if (cardPosition !== 0) result.push({
      label: 'Move Up',
      icon: <span>&uarr;</span>,
      onClick: () => dispatch(moveCardUp(cardPosition, listPosition)),
    });
    if (listPosition !== 0) result.push({
      label: 'Move Left',
      icon: <span>&larr;</span>,
      onClick: () => dispatch(moveCardLeft(cardPosition, listPosition)),
    });
    if (!isCardLast) result.push({
      label: 'Move Down',
      icon: <span>&darr;</span>,
      onClick: () => dispatch(moveCardDown(cardPosition, listPosition)),
    });
    result.push({
      label: 'Delete',
      icon: <span></span>,
      onClick: () => dispatch(deleteCard(cardPosition, listPosition)),
    });
    return result;
  }, [ cardPosition, listPosition, isListLast, isCardLast ]);

  return (
    <CardBox>
      <Editable
        save={title => dispatch(renameCard(id, listId, title))}
        initialValue={title}
      >
        {title}
      </Editable>
      <ActionsMenu
        items={cardActions}
      />
    </CardBox>
  )
};

const CardBox = styled.li`
  padding: 10px 12px;
  background-color: white;
  border-radius: 4px;
  box-shadow: var(--color-gray-200) 3px 3px 3px;
  margin: 10px 12px;
  overflow-wrap: break-word;
  display: flex;
  justify-content: space-between;
`;

export default BoardCard;
