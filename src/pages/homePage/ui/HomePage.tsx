// react
import { FC } from 'react';
import { useNavigate } from 'react-router';
//ui
import { Button } from '@/shared/ui';
//routes
import {
  getCharactersPage,
  getEpisodesPage,
  getLocationsPage
} from '@/shared/libs/constants/routes';
//constants
import { scrollUpFunction } from '@/shared/libs/constants';
//assets
import Icon from '@/shared/libs/assets/svg/Icon.svg?react';
// styles
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();

  const onNavigateToCharacters = () => {
    navigate(getCharactersPage());
    scrollUpFunction();
  };

  const onNavigateToLocation = () => {
    navigate(getLocationsPage());
    scrollUpFunction();
  };

  const onNavigateToEpisode = () => {
    navigate(getEpisodesPage());
    scrollUpFunction();
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.iconHome}>
        <Icon />
      </div>
      <div className={styles.categoryButtons}>
        <Button
          height='large'
          fontFamily='RickMortyFont'
          onClick={onNavigateToCharacters}
        >
          Characters
        </Button>
        <Button
          height='large'
          fontFamily='RickMortyFont'
          onClick={onNavigateToLocation}
        >
          Locations
        </Button>
        <Button
          height='large'
          fontFamily='RickMortyFont'
          onClick={onNavigateToEpisode}
        >
          Episodes
        </Button>
      </div>
    </div>
  );
};
