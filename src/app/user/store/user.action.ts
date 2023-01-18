import { createAction, props } from '@ngrx/store';
import {
  Authors,
  Juz,
  Language,
  SingleDataSurah,
  Surah,
  SurahData,
  VerseBySurahs,
} from '../types';

interface IAction {
  readonly lang: string;
}

export const isSubHeader = createAction(
  '[SubHeader Component] Active or Not Active',
  props<{ isSubHeader: boolean }>()
);

export const openSetting = createAction('[Settings Component] OpenSetting');
export const openCategory = createAction('[Category Component] OpenCategory');
export const changeLanguage = createAction('Langauge Change', props<IAction>());
export const openSingleSurahModal = createAction('Open Single Surah Modal');
export const isSurah = createAction(
  '[Is Surah]',
  props<{ isSurah: boolean }>()
);

export const authorChange = createAction(
  '[Author Change]',
  props<{ selectedAuthor: Authors }>()
);
export const isScrollHandler = createAction(
  '[IsScroll Handler Component]',
  props<{ isScroll: boolean }>()
);

export const LANGUAGE__HANDLER = createAction(
  '[LANGUAGE HANDLER]',
  props<{ language: Language[] }>()
);

export const SURAHS__HANDLER = createAction(
  '[Surah Handler]',
  props<{ surahs: Surah[] }>()
);

export const JUZ__HANDLER = createAction(
  '[Juz Handler]',
  props<{ juz: Juz[] }>()
);

export const AUTHORS__HANDLER = createAction(
  '[AUTHORS__HANDLER]',
  props<{ authors: Authors[] }>()
);

export const SINGLE__SURAH__HANDLER = createAction(
  '[Single Surah Handler]',
  props<{ singleSurah: SurahData }>()
);

export const SINGLE__VERSE__HANDLER = createAction(
  '[Single Surah Verse]',
  props<{ verse: VerseBySurahs[] }>()
);
