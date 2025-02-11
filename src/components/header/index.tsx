import {
  header,
  navList,
  navListItem,
  navViewport,
  navContent,
  menuItem,
  menuPageList,
} from './header.css';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Box from '@/components/Box';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import PageList from '@/components/pageList';

import Link from 'next/link';
import Text from '@/components/text';
import Squiggle from '../squiggle';

export default function Header() {
  const [value, setValue] = useState(``);
  const { asPath } = useRouter();

  useEffect(() => {
    setValue(``);
  }, [asPath]);

  return (
    <NavigationMenu.Root
      className={`${header}`}
      value={value}
      onValueChange={setValue}
    >
      <NavigationMenu.List className={`${navList}`}>
        <NavigationMenu.Item className={`${navListItem}`}>
          <NavigationMenu.Link href="/">
            <Text as="h3" kind="h3" font="heading">
              Home
            </Text>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={`${navListItem}`}>
          <NavigationMenu.Trigger className={`${navListItem}`}>
            <Text as="h3" kind="h3" font="heading">
              Projects
            </Text>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={`${navContent}`}>
            <Text as="h4" kind="h4" font="heading">
              Photography
            </Text>
            <PageList
              pageType="Gallery"
              limit={3}
              showMore={true}
              listStyle="list"
            />
            <Text as="h4" kind="h4" font="heading">
              Blog
            </Text>
            <PageList
              pageType="Blog"
              limit={3}
              showMore={true}
              listStyle="list"
            />
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={`${navListItem}`}>
          <NavigationMenu.Trigger className={`${navListItem}`}>
            <Text as="h3" kind="h3" font="heading">
              Etc
            </Text>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <Box className={menuPageList}>
              <Link href="/thoughts" passHref={true}>
                <a className={menuItem}>
                  <Squiggle height={8} squiggleWidth={8} />
                  <Text as="h5" kind="h5" bold={true}>
                    Thoughts
                  </Text>
                </a>
              </Link>

              <Link href="/guestbook" passHref={true}>
                <a className={menuItem}>
                  <Squiggle height={8} squiggleWidth={8} />
                  <Text as="h5" kind="h5" bold={true}>
                    The Guestbook
                  </Text>
                </a>
              </Link>

              <Link href="https://eeethers.xyz/" passHref={true}>
                <a className={menuItem}>
                  <Squiggle height={8} squiggleWidth={8} />
                  <Text as="h5" kind="h5" bold={true}>
                    Eeethers
                  </Text>
                </a>
              </Link>

              <Link href="http://localhost:3000/tokens" passHref={true}>
                <a className={menuItem}>
                  <Squiggle height={8} squiggleWidth={8} />
                  <Text as="h5" kind="h5" bold={true}>
                    Tokens
                  </Text>
                </a>
              </Link>
            </Box>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport className={`${navViewport}`} />
    </NavigationMenu.Root>
  );
}
