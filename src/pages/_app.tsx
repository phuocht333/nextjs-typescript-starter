import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/root.css'; 
import '@/styles/variables.less'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
