import { ArrowRightIcon, HomeIcon, MixIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import React from 'react';

import Box from '@/components/Box';
import Text from '@/components/Text';
import PageQuery from '@/utils/gql/pageQuery';

import { navigationRecipe } from './Navigation.css';

export const _NavigationMenu = () => {
  const GalleryData = PageQuery({ type: `Gallery`, limit: 9 });
  const BlogData = PageQuery({ type: `Blog`, limit: 9 });

  return (
    <NavigationMenu.Root className={navigationRecipe({ nav: `menu` })}>
      <NavigationMenu.List className={navigationRecipe({ nav: `menuList` })}>
        <NavigationMenu.Item>
          <Box className={navigationRecipe({ nav: `menuTrigger` })}>
            <HomeIcon className={navigationRecipe({ nav: `menuIcon` })} />
          </Box>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={navigationRecipe({ nav: `menuTrigger` })}
          >
            <MixIcon className={navigationRecipe({ nav: `menuIcon` })} />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className={navigationRecipe({ nav: `menuContent` })}
          >
            <Text kind="h2">Etc</Text>
            <Box className={navigationRecipe({ nav: `menuPageList` })}>
              <Box className={navigationRecipe({ nav: `menuItem` })}>
                <Link href="/thoughts" passHref={true}>
                  <a>
                    <Text kind="p">Thoughts</Text>
                  </a>
                </Link>
              </Box>
              <Box className={navigationRecipe({ nav: `menuItem` })}>
                <Link href="/guestbook" passHref={true}>
                  <a>
                    <Text kind="p">The Guestbook</Text>
                  </a>
                </Link>
              </Box>
            </Box>
            <Text kind="h2">Photography</Text>
            <Box className={navigationRecipe({ nav: `menuPageList` })}>
              {GalleryData &&
                GalleryData.map((page: any, index: number) => (
                  <Box key={index}>
                    <Link href={`/${page.slug}`} passHref={true}>
                      <a className={navigationRecipe({ nav: `menuItem` })}>
                        <Text kind="p">{page.title}</Text>
                        <Text kind="p">
                          <Text as="small" kind="small">
                            Published:{` `}
                            {new Date(
                              page.publishDate
                                .replace(/-/g, `/`)
                                .replace(/T.+/, ``),
                            ).toLocaleDateString(`en-us`)}
                          </Text>
                        </Text>
                      </a>
                    </Link>
                  </Box>
                ))}
              <Box className={navigationRecipe({ nav: `menuItem` })}>
                <Link href="/work" passHref={true}>
                  <a>
                    <ArrowRightIcon />
                  </a>
                </Link>
              </Box>
            </Box>

            <Text kind="h2">Writing</Text>
            <Box className={navigationRecipe({ nav: `menuPageList` })}>
              {BlogData &&
                BlogData.map((page: any, index: number) => (
                  <Box key={index}>
                    <Link href={`/${page.slug}`} passHref={true}>
                      <a className={navigationRecipe({ nav: `menuItem` })}>
                        <Text kind="p">{page.title}</Text>
                        <Text kind="p">
                          <Text as="small" kind="small">
                            Published:{` `}
                            {new Date(
                              page.publishDate
                                .replace(/-/g, `/`)
                                .replace(/T.+/, ``),
                            ).toLocaleDateString(`en-us`)}
                          </Text>
                        </Text>
                      </a>
                    </Link>
                  </Box>
                ))}
              <Box className={navigationRecipe({ nav: `menuItem` })}>
                <Link href="/blog" passHref={true}>
                  <a>
                    <ArrowRightIcon />
                  </a>
                </Link>
              </Box>
            </Box>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      {/* NavigationMenu.Content will be rendered here when active */}
      <Box className={navigationRecipe({ nav: `menuViewportPosition` })}>
        <NavigationMenu.Viewport
          className={navigationRecipe({ nav: `menuViewport` })}
        />
      </Box>
    </NavigationMenu.Root>
  );
};

export default _NavigationMenu;
