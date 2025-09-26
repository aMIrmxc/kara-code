import localFont from 'next/font/local';

export const vazir = localFont({
  src: [
    {
      path: '../public/fonts/Vazirmatn-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Vazirmatn-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
});

export const noto = localFont({
  src: [
    {
      path: '../public/fonts/NotoKufiArabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NotoKufiArabic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto',
});