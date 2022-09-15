import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import ListFooter from './ListFooter';
import BoardCard from './BoardCard';
import ListColumn from './ListColumn';
import Editable from './Editable';
import { deleteList, moveListLeft, moveListRight, renameList } from '../state/boardActions';
import { List } from '../types/List.type';
import AddCard from './AddCard';
import useDispatch from '../hooks/useDispatch';
import ActionsMenu from './ActionsMenu';
import { MenuItemProps } from './MenuItem';

type BoardListProps = List & {
  position: number;
  isLast?: boolean;
}

const BoardList: FC<BoardListProps> = ({
  id,
  label,
  cards,
  position,
  isLast = false,
}) => {
  const dispatch = useDispatch();
  const listActions = useMemo<MenuItemProps[]>(() => {
    const result = [];
    if (position !== 0) {
      result.push({
        label: 'Move Left',
        icon: <span>&larr;</span>,
        onClick: () => dispatch(moveListLeft(position)),
      });
    }
    if (!isLast) {
      result.push({
        label: 'Move Right',
        icon: <span>&rarr;</span>,
        onClick: () => dispatch(moveListRight(position)),
      });
    }
    result.push({
      label: 'Delete',
      icon: <span></span>,
      onClick: () => dispatch(deleteList(position)),
    });
    return result;
  }, [ position, isLast ]);

  return (
    <ListColumn>
      <ListHeader
        role="heading"
      >
        <Editable
          save={value => dispatch(renameList(id, value))}
          initialValue={label}
        >
          {label}
        </Editable>
        <ActionsMenu
          items={listActions}
        />
      </ListHeader>
      <CardsList>
        {cards.map((card, cardPosition) => (
          <BoardCard
            {...card}
            listId={id}
            listPosition={position}
            cardPosition={cardPosition}
            isListLast={isLast}
            isCardLast={cardPosition === cards.length - 1}
            key={card.id}
          />
        ))}
      </CardsList>
      <ListFooter>
        <AddCard
          listId={id}
        />
      </ListFooter>
    </ListColumn>
  );
}

const CardsList = styled.ul`
  list-style: none;
  max-height: calc(100% - 80px);
  //overflow-y: auto;
  padding: 0;
  margin: 0;
`

export default BoardList;
