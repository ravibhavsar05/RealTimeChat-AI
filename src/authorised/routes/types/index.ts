import {AuthorisedRoutes, TabRoutes} from '../enums';

export type AuthorisedStackRoutesAndParams = {
  [AuthorisedRoutes.TABS]: {screen: TabRoutes};
};

export type {TabStackRoutesAndParams} from './tabs';
export type {HomeStackRoutesAndParams} from './home';
export type {DetailsStackRoutesAndParams} from './details';
export type {ProfileStackRoutesAndParams} from './profile';
