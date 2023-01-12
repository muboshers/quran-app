import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Authors,
  JuzBody,
  JuzList,
  Languages,
  SingleSurah,
  SurahList,
  VerseBySurahLang,
  VerseBySurahs,
} from '../types';

const API_URL: string = 'https://quranuz-backend.up.railway.app/api';
const API_VERSION: string = 'v1';
const LANGUAGE_ID = 2;

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  // get all language
  getAllLanguage() {
    return this.http.get<Languages>(`${API_URL}/${API_VERSION}/language`);
  }
  // get all surah
  getAllSurah() {
    return this.http.get<SurahList>(
      `${API_URL}/${API_VERSION}/surah/${LANGUAGE_ID}`
    );
  }

  // get all juzlist
  getAllJuz(body: JuzBody) {
    return this.http.get<JuzList>(
      `${API_URL}/${API_VERSION}/juz/${LANGUAGE_ID}?value=${body.value}&sortDirection=${body.sortDirection}`
    );
  }

  // filter surah
  getAllSurahByFilter(body: JuzBody) {
    return this.http.get<SurahList>(
      `${API_URL}/${API_VERSION}/surah/${LANGUAGE_ID}/filter?value=${body.value}&sortDirection=${body.sortDirection}`
    );
  }

  // get all authors
  getAllAuthors(authorQuery: 'INTERPRETER' | 'RECITER') {
    return this.http.get<Authors[]>(
      `${API_URL}/${API_VERSION}/author?authorType=${authorQuery}`
    );
  }

  // get surah by id
  getSurahById(id: string) {
    return this.http.get<SingleSurah>(
      `${API_URL}/${API_VERSION}/surah/${id}/${LANGUAGE_ID}`
    );
  }

  // get verse by id
  getVerseDetail(params: VerseBySurahLang) {
    return this.http.get<VerseBySurahs[]>(
      `${API_URL}/${API_VERSION}/verse/by-surah-lang?authorId=${params.authorId}&langId=${LANGUAGE_ID}&surahId=${params.surahId}`
    );
  }
}
