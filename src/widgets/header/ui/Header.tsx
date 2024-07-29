// react
import { FC } from 'react';
import { useNavigate } from 'react-router';
//constants
import { getHomePage } from '@/shared/libs/constants';
//assets
import Logo from '@/shared/libs/assets/svg/Rick_and_Morty.svg?react';
// styles
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.Header}>
      <Logo onClick={() => navigate(getHomePage())} />
    </div>
  );
};
