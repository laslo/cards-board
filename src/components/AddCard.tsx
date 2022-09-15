import React, { FC } from 'react';
import Editable from './Editable';
import { addCard } from '../state/boardActions';
import useDispatch from '../hooks/useDispatch';

interface AddCardProps {
  listId: number;
}

const AddCard: FC<AddCardProps> = ({
  listId,
}) => {
  const dispatch = useDispatch();
  return (
    <Editable
      save={value => dispatch(addCard(listId, value))}
      initialValue=""
    >
      + Add a card
    </Editable>
  );
}

export default AddCard;
