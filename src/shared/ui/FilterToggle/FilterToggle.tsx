// react
import { FC } from 'react';
import { useDispatch } from 'react-redux';
//actions
import { filterCharacterAction } from '@/entities/characters/model/slice/characterSlice';
// styles
import styles from './FilterToggle.module.scss';

interface FilterToggleProps {
  isFiltered: boolean;
}

export const FilterToggle: FC<FilterToggleProps> = ({ isFiltered }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.FilterToggle}>
      <h2>Filter:</h2>
      <input
        type='checkbox'
        className='toggle'
        checked={isFiltered}
        onChange={() =>
          dispatch(
            filterCharacterAction.filterCharacter({
              isFiltered: false,
              status: '',
              gender: ''
            })
          )
        }
      />
    </div>
  );
};
