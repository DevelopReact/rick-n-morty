//react
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
//ui
import { HomePage } from '@/pages/homePage';
import { CharacterIdPage, CharactersPage } from '@/pages/charactersPage';
import { LocationIdPage, LocationsPage } from '@/pages/locationsPage';
import { EpisodeIdPage, EpisodesPage } from '@/pages/episodesPage';
//layouts
import { PageLayout } from '@/app/layouts/PageLayout';
//routes
import {
  getCharacterIdPage,
  getCharactersPage,
  getEpisodeIdPage,
  getEpisodesPage,
  getHomePage,
  getLocationIdPage,
  getLocationsPage
} from '@/shared/libs/constants';

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={getHomePage()} element={<HomePage />}></Route>
        <Route path={getCharactersPage()} element={<CharactersPage />}></Route>
        <Route path={getLocationsPage()} element={<LocationsPage />}></Route>
        <Route path={getEpisodesPage()} element={<EpisodesPage />}></Route>
        <Route
          path={getCharacterIdPage()}
          element={<CharacterIdPage />}
        ></Route>
        <Route path={getLocationIdPage()} element={<LocationIdPage />}></Route>
        <Route path={getEpisodeIdPage()} element={<EpisodeIdPage />}></Route>
        <Route path='*' element={<Navigate to={getHomePage()} replace />} />
      </Route>
    </Routes>
  );
};
