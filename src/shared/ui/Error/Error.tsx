// react
import { FC } from 'react';
// styles
import styles from './Error.module.scss';

interface ErrorProps {}

export const Error: FC<ErrorProps> = ({}) => {
  return (
    <div className={styles.Error}>
      <p>Something went wrong...&#128542;</p>
    </div>
  );
};
