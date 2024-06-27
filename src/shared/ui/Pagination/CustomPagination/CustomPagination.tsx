// react
import { FC } from 'react';
//ui
import { Button } from '../../Button/Button';
//constants
import { scrollUpFunction } from '@/shared/libs/constants';
// styles
import styles from './CustomPagination.module.scss';

interface CustomPaginationProps {
  pageNumber: number;
  setPageNumber: (prev: number) => void;
  countPages: number;
}

export const CustomPagination: FC<CustomPaginationProps> = ({
  pageNumber,
  setPageNumber,
  countPages
}) => {
  const onClickNextPage = () => {
    setPageNumber(pageNumber + 1);
    scrollUpFunction();
  };

  const onClickPrevPage = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
    scrollUpFunction();
  };

  return (
    <div className={styles.CustomPagination}>
      <Button
        height='small'
        fontFamily='Courier'
        disabled={pageNumber === 1}
        onClick={onClickPrevPage}
      >
        Prev
      </Button>
      <div className={styles.countPage}>
        <p>{pageNumber}</p>
        <span>/</span>
        <span>{countPages}</span>
      </div>
      <Button
        height='small'
        fontFamily='Courier'
        disabled={pageNumber === countPages}
        onClick={onClickNextPage}
      >
        Next
      </Button>
    </div>
  );
};
