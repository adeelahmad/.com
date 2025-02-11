import Header from '../header';
import Footer from '../footer';
import { themeClass } from '@/styles/sprinkles.css';
import { layout, content } from './layout.css';
import Box from '@/components/Box';
import { useRouter } from 'next/router';
import Window from '@/components/window';
import Featured from '@/components/featured';
import Squiggle from '../squiggle';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();

  return (
    <Box className={`${themeClass} ${layout}`}>
      <Header />
      {asPath === `/` && (
        <>
          <Window />
          <Squiggle />
        </>
      )}
      <Box as="main" className={`${content}`}>
        {children}
      </Box>
      {asPath === `/` && (
        <>
          <Squiggle />
          <Featured />
        </>
      )}
      <Footer />
    </Box>
  );
}
