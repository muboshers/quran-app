import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JuzBody, JuzList, Languages, SurahList } from '../types';



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
  getAllJuz(body:JuzBody) {
    return this.http.post<JuzList>(
      `${API_URL}/${API_VERSION}/juz/${LANGUAGE_ID}`,body
    );
  }
}
