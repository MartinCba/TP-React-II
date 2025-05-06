import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      '404 - Juego no encontrado': '404 - Juego no encontrado',
      'Volver al inicio': 'Volver al inicio',
      'Top usuarios': 'Top usuarios',
      'Populares': 'Populares',
      'Top crítica': 'Top crítica',
      'Estrenos': 'Estrenos',
      'Buscar juegos...': 'Buscar juegos...',
      'No se encontraron juegos para tu búsqueda.': 'No se encontraron juegos para tu búsqueda.',
      'Tus Favoritos': 'Tus Favoritos',
      'No tienes favoritos aún': 'No tienes favoritos aún',
      'Agrega juegos a favoritos haciendo click en el corazón de cada juego.': 'Agrega juegos a favoritos haciendo click en el corazón de cada juego.',
      'Ver detalles de': 'Ver detalles de',
      'Lanzamiento': 'Lanzamiento',
      'Rating': 'Rating',
      'Metacritic': 'Metacritic',
      'Plataformas': 'Plataformas',
      'Desarrolladores': 'Desarrolladores',
      'Horas estimadas': 'Horas estimadas',
      'ESRB': 'ESRB',
      'Disponible en:': 'Disponible en:',
      'Sitio web oficial': 'Sitio web oficial',
      'Página': 'Página',
      'Anterior': 'Anterior',
      'Siguiente': 'Siguiente',
      'Volver': 'Volver',
      'Dirección': 'Dirección',
      'Contacto': 'Contacto',
      'Todos los derechos reservados.': 'Todos los derechos reservados.',
      'Descripción': 'Descripción',
      'Descargar PDF': 'Descargar PDF',
    }
  },
  en: {
    translation: {
      '404 - Juego no encontrado': '404 - Game not found',
      'Volver al inicio': 'Back to home',
      'Top usuarios': 'Top users',
      'Populares': 'Popular',
      'Top crítica': 'Top critics',
      'Estrenos': 'New releases',
      'Buscar juegos...': 'Search games...',
      'No se encontraron juegos para tu búsqueda.': 'No games found for your search.',
      'Tus Favoritos': 'Your Favorites',
      'No tienes favoritos aún': 'You have no favorites yet',
      'Agrega juegos a favoritos haciendo click en el corazón de cada juego.': 'Add games to favorites by clicking the heart on each game.',
      'Ver detalles de': 'See details of',
      'Lanzamiento': 'Release',
      'Rating': 'Rating',
      'Metacritic': 'Metacritic',
      'Plataformas': 'Platforms',
      'Desarrolladores': 'Developers',
      'Horas estimadas': 'Estimated hours',
      'ESRB': 'ESRB',
      'Disponible en:': 'Available at:',
      'Sitio web oficial': 'Official website',
      'Página': 'Page',
      'Anterior': 'Previous',
      'Siguiente': 'Next',
      'Volver': 'Back',
      'Dirección': 'Address',
      'Contacto': 'Contact',
      'Todos los derechos reservados.': 'All rights reserved.',
      'Descripción': 'Description',
      'Descargar PDF': 'Download PDF',
    }
  }
};

const lang = localStorage.getItem('lang') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lang,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 