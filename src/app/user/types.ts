export interface Languages {
  success: boolean;
  data: Language[];
}

export interface Language {
  name: string;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}

export interface SurahList {
  success: boolean;
  data: Surah[];
}

export interface Surah {
  surahId: number;
  arabicName: string;
  name: string;
  verseCount: number;
  orderNumber: number;
}

export interface JuzList {
  success: boolean;
  data: Juz[];
}

export interface Juz {
  juzNumber: number;
  surahs: JuzInfo[];
}

export interface JuzInfo {
  surahId: number;
  startOrderNumber: number;
  endOrderNumber: number;
  arabicName: string;
  surahName: string;
  surahOrderNumber: string;
}

export interface JuzBody {
  value: string;
  sortDirection: string;
}

export interface Authors {
  fullName: string;
  type: 'INTERPRETER' | 'RECITOR';
  id: number;
}
