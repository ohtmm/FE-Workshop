import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const Pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: "youngyoung's FE Workshop ",
  description: '다양한 UI를 실험적으로 제작합니다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${Pretendard.variable}`}>
      <body className={`${Pretendard.className} bg-black`}>{children}</body>
    </html>
  );
}
