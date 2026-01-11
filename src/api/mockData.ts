import type { Post } from './posts';
import { PostStatus } from './posts';

export const mockPosts: Post[] = [
  {
    id: 1,
    tytul: 'Fałszywy cytat prezydenta USA na Twitterze',
    trescFakeNewsa:
      'W mediach społecznościowych rozpowszechniany jest screenshot z Twittera, który rzekomo pokazuje kontrowersyjną wypowiedź prezydenta USA o planach wprowadzenia nowych podatków.',
    wyjasnienie:
      'Po dokładnym sprawdzeniu oficjalnego konta prezydenta na platformie X (dawniej Twitter) okazuje się, że taki tweet nigdy nie został opublikowany. Screenshot został stworzony przy użyciu narzędzi do edycji graficznej. Analiza metadanych obrazka wskazuje na manipulację.',
    zrodla: [
      {
        id: 1,
        url: 'https://twitter.com/POTUS',
        title: 'Oficjalne konto prezydenta',
      },
      {
        id: 2,
        url: 'https://factcheck.org/2026/01/fake-tweet',
        title: 'Analiza FactCheck.org',
      },
    ],
    kategoria: { id: 2, nazwa: 'Polityka', opis: 'Dezinformacja polityczna' },
    status: PostStatus.OPUBLIKOWANY,
    dataUtworzenia: '2026-01-08T10:00:00Z',
    autor: { id: 1, email: 'redaktor@debunk.pl', name: 'Jan Kowalski' },
    imageUrl: 'https://picsum.photos/seed/fake1/800/600',
    ocenyPozytywne: 47,
    ocenyNegatywne: 3,
    mojaOcena: null,
    komentarze: [
      {
        id: 1,
        tresc:
          'Sprawdziłem, faktycznie nie ma takiego tweeta. Dzięki za weryfikację!',
        user: { id: 2, email: 'jan@example.com', name: 'Anna Nowak' },
        data: '2026-01-09T14:30:00Z',
      },
    ],
  },
  {
    id: 2,
    tytul: 'Zmanipulowane zdjęcie polityka',
    trescFakeNewsa:
      'W mediach społecznościowych krąży zdjęcie znanego polityka w kompromitującej sytuacji podczas oficjalnego spotkania.',
    wyjasnienie:
      'Analiza metadanych zdjęcia oraz porównanie z oryginalnymi fotografiami z tego wydarzenia wykazuje, że zdjęcie zostało zmodyfikowane w programie graficznym. Widoczne są ślady edycji na krawędziach postaci.',
    zrodla: [
      {
        id: 3,
        url: 'https://reuters.com/fact-check/manipulated-photo',
        title: 'Reuters Fact Check',
      },
    ],
    kategoria: { id: 2, nazwa: 'Polityka', opis: 'Dezinformacja polityczna' },
    status: PostStatus.OPUBLIKOWANY,
    dataUtworzenia: '2026-01-06T16:20:00Z',
    autor: { id: 3, email: 'ekspert@debunk.pl', name: 'Maria Wiśniewska' },
    imageUrl: 'https://picsum.photos/seed/fake2/800/600',
    ocenyPozytywne: 89,
    ocenyNegatywne: 5,
    mojaOcena: true,
    komentarze: [
      {
        id: 2,
        tresc: 'Widać wyraźne ślady edycji na krawędziach. Dobra robota!',
        user: {
          id: 4,
          email: 'ekspert.graficzny@example.com',
          name: 'Piotr Grafik',
        },
        data: '2026-01-07T09:15:00Z',
      },
    ],
  },
  {
    id: 3,
    tytul: 'Fake news o szkodliwości sieci 5G',
    trescFakeNewsa:
      'Artykuł twierdzi, że technologia 5G powoduje poważne problemy zdrowotne i jest powiązana z rozprzestrzenianiem się chorób.',
    wyjasnienie:
      'Nie istnieją żadne wiarygodne badania naukowe potwierdzające szkodliwość technologii 5G dla zdrowia ludzi. WHO oraz liczne instytucje naukowe potwierdzają bezpieczeństwo tej technologii. Częstotliwości używane przez 5G są znacznie poniżej poziomów uznawanych za szkodliwe.',
    zrodla: [
      { id: 4, url: 'https://who.int/5g-safety', title: 'Stanowisko WHO' },
      { id: 5, url: 'https://nature.com/5g-research', title: 'Badania Nature' },
    ],
    kategoria: {
      id: 3,
      nazwa: 'Technologia',
      opis: 'Fałszywe informacje o technologii',
    },
    status: PostStatus.OPUBLIKOWANY,
    dataUtworzenia: '2026-01-05T11:30:00Z',
    autor: { id: 5, email: 'tech@debunk.pl', name: 'Tomasz Techniczny' },
    imageUrl: 'https://picsum.photos/seed/fake3/800/600',
    ocenyPozytywne: 156,
    ocenyNegatywne: 12,
    mojaOcena: null,
    komentarze: [],
  },
  {
    id: 4,
    tytul: 'Fałszywa informacja o nowym podatku',
    trescFakeNewsa:
      'Post na Facebooku twierdzi, że od przyszłego miesiąca wchodzi w życie nowe prawo drastycznie zwiększające podatki od nieruchomości.',
    wyjasnienie:
      'Sprawdzenie w Dzienniku Ustaw pokazuje, że taka ustawa nie istnieje. Ministerstwo Finansów oficjalnie zdementowało te informacje. Jest to przykład dezinformacji mającej na celu wywołanie paniki.',
    zrodla: [
      {
        id: 6,
        url: 'https://dziennikustaw.gov.pl',
        title: 'Dziennik Ustaw RP',
      },
      {
        id: 7,
        url: 'https://gov.pl/finanse/komunikat',
        title: 'Komunikat Ministerstwa',
      },
    ],
    kategoria: {
      id: 5,
      nazwa: 'Gospodarka',
      opis: 'Dezinformacja ekonomiczna',
    },
    status: PostStatus.OPUBLIKOWANY,
    dataUtworzenia: '2026-01-03T14:45:00Z',
    autor: { id: 6, email: 'prawo@debunk.pl', name: 'Katarzyna Prawnik' },
    imageUrl: undefined,
    ocenyPozytywne: 34,
    ocenyNegatywne: 2,
    mojaOcena: null,
    komentarze: [
      {
        id: 3,
        tresc: 'Moja babcia prawie w to uwierzyła, dobrze że sprawdziliście!',
        user: { id: 7, email: 'tomek@example.com', name: 'Tomek' },
        data: '2026-01-04T18:00:00Z',
      },
    ],
  },
];

export const transformApiPostToFullPost = (apiPost: any): Post => {
  return {
    id: apiPost.id,
    tytul: apiPost.title || apiPost.tytul || '',
    trescFakeNewsa: apiPost.trescFakeNewsa || apiPost.description || '',
    wyjasnienie: apiPost.wyjasnienie || '',
    zrodla: apiPost.zrodla || apiPost.sourceLinks || [],
    kategoria: apiPost.kategoria || undefined,
    status: apiPost.status ?? PostStatus.OPUBLIKOWANY,
    dataUtworzenia:
      apiPost.dataUtworzenia || apiPost.createdAt || new Date().toISOString(),
    autor: apiPost.autor ||
      apiPost.user || { id: 0, email: 'unknown@example.com', name: 'Nieznany' },
    imageUrl: apiPost.imageUrl || undefined,
    ocenyPozytywne: apiPost.ocenyPozytywne || 0,
    ocenyNegatywne: apiPost.ocenyNegatywne || 0,
    mojaOcena: apiPost.mojaOcena ?? null,
    komentarze: apiPost.komentarze || [],
  };
};
