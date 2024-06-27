// react
import { FC } from 'react';
import { Outlet } from 'react-router';
//ui
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
// styles
import styles from './PageLayout.module.scss';

interface PageLayoutProps {}

export const PageLayout: FC<PageLayoutProps> = ({}) => {
  return (
    <div className={styles.PageLayout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
