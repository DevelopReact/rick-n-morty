// react
import { FC } from 'react';
//lib
import classNames from 'classnames';
// styles
import styles from './IconStatus.module.scss';

interface IconStatusProps {
  backgroundColor: 'Alive' | 'Dead' | 'unknown';
}

export const IconStatus: FC<IconStatusProps> = ({ backgroundColor }) => {
  return (
    <div
      className={classNames(styles.IconStatus, {
        [styles.AliveBC]: backgroundColor === 'Alive',
        [styles.DeadBC]: backgroundColor === 'Dead',
        [styles.unknownBC]: backgroundColor === 'unknown'
      })}
    ></div>
  );
};
