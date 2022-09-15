import React, { FC, useContext } from 'react';
import ListHeader from './ListHeader';
import ListColumn from './ListColumn';
import { addList } from '../state/boardActions';
import Editable from './Editable';
import useDispatch from '../hooks/useDispatch';

const AddList: FC = () => {
  const dispatch = useDispatch();
  return (
    <ListColumn>
      <ListHeader
        role="heading"
      >
        <Editable
          save={value => dispatch(addList(value))}
          initialValue=""
        >
          + Add another list
        </Editable>
      </ListHeader>
    </ListColumn>
  );
}

export default AddList;
