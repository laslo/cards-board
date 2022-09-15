import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import TextField from './TextField';
import EditableForm from './EditableForm';

interface EditableProps {
  save: (value: string) => void;
  initialValue: string;
  children: ReactNode;
}

const Editable: FC<EditableProps> = ({
  save,
  initialValue,
  children,
}) => {
  const [ isEditing, setEditing ] = useState(false);
  const [ value, setValue ] = useState('');
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => setValue(initialValue), [initialValue]);

  useEffect(() => {
    if (isEditing && !!input?.current)
      input.current.focus();
  }, [ isEditing, input ]);

  const onSave = useCallback((newValue: string) => {
    if (newValue.length)
      save(newValue);
    setValue(initialValue);
    setEditing(false);
  }, []);

  return (
    <>
      {isEditing ? (
        <EditableForm
          onBlur={() => onSave(value)}
          onSubmit={() => onSave(value)}
        >
          <TextField
            value={value}
            onChange={e => setValue(e.target.value)}
            ref={input}
          />
        </EditableForm>
      ) : (
        <div
          onClick={() => {
            setEditing(true);
          }}
          tabIndex={0}
        >
          {children}
        </div>
      )}
    </>
  )
};

export default Editable;
