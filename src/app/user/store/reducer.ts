import { Juz, Language, Surah } from '../types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { createReducer, on } from '@ngrx/store';
import {
  openCategory,
  openSetting,
  changeLanguage,
  isSubHeader,
  isScrollHandler,
  openSingleSurahModal,
  LANGUAGE__HANDLER,
  SURAHS__HANDLER,
  JUZ__HANDLER,
} from './user.action';

export interface userStataType {
  category: boolean;
  setting: boolean;
  readonly lang: string;
  isSubHeader: boolean;
  isScroll: boolean;
  singleSurahModal: boolean;
  language?: Language[];
  surahs?: Surah[];
  juz?: Juz[];
}

export const initialState: userStataType = {
  category: false,
  setting: false,
  lang: 'uz',
  isSubHeader: false,
  isScroll: true,
  singleSurahModal: false,
  language: undefined,
  surahs: undefined,
  juz: undefined,
};

export const userReducer = createReducer(
  initialState,
  on(openCategory, (state) => ({ ...state, category: !state.category })),
  on(openSetting, (state) => ({ ...state, setting: !state.setting })),
  on(isSubHeader, (state, { isSubHeader }) => ({ ...state, isSubHeader })),
  on(openSingleSurahModal, (state) => ({
    ...state,
    singleSurahModal: !state.singleSurahModal,
  })),
  on(changeLanguage, (state, { lang }) => ({ ...state, lang })),
  on(isScrollHandler, (state, { isScroll }) => ({ ...state, isScroll })),
  on(LANGUAGE__HANDLER, (state, { language }) => ({ ...state, language })),
  on(SURAHS__HANDLER, (state, { surahs }) => ({ ...state, surahs })),
  on(JUZ__HANDLER, (state, { juz }) => ({ ...state, juz }))
);
