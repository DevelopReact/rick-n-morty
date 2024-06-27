// react
import { FC } from 'react';
// styles
import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.Footer}>
      <p>&copy; Rick & Morty Cartoon Network Incorporated</p>
    </div>
  );
};
