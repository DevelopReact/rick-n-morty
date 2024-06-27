// react
import { FC } from 'react';
//assets
import Logo from '@/shared/libs/assets/svg/Rick_and_Morty.svg?react';
// styles
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <Logo />
    </div>
  );
};
