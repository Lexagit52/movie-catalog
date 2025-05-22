// src/app/utils/getEmbedLink.ts

export function getEmbedLink(url: string): string {
  try {
    const parsedUrl = new URL(url);

    // YouTube
    if (
      parsedUrl.hostname === 'www.youtube.com' ||
      parsedUrl.hostname === 'youtube.com'
    ) {
      const v = parsedUrl.searchParams.get('v');
      if (v) {
        return `https://www.youtube.com/embed/${v}`;
      }
    }

    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Vimeo
    if (
      parsedUrl.hostname === 'vimeo.com' ||
      parsedUrl.hostname === 'www.vimeo.com'
    ) {
      const videoId = parsedUrl.pathname.split('/')[1];
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`;
      }
    }

    // Если не YouTube и не Vimeo, возвращаем ссылку как есть (попробуем iframe)
    return url;
  } catch {
    // Если невалидная ссылка — вернуть как есть
    return url;
  }
}
