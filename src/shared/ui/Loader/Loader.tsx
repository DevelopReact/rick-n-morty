// react
import { FC } from 'react';
//assets
import ImgLoader from '@/shared/libs/assets/svg/portal-rick-and-morty.gif';
// styles
import styles from './Loader.module.scss';

interface LoaderProps {}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className={styles.Loader}>
      <img src={ImgLoader} alt='loader' />
    </div>
  );
};
