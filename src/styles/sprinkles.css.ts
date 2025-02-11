import { createTheme } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

export const [themeClass, vars] = createTheme({
  color: {
    blue50: `#eff6ff`,
    blue100: `#dbeafe`,
    blue200: `#bfdbfe`,
    yellow: `#aaff00`,
    black: `#1a1a1a`,
  },
  font: {
    body: `arial`,
  },
  fontSize: {
    p: `16px`,
    h1: `48.83px`,
    h2: `39.06px`,
    h3: `31.25px`,
    h4: `25px`,
    h5: `20px`,
    h6: `12.8px`,
    small: `10.24px`,
  },
  fontWeight: {
    '400': `400`,
    '600': `600`,
    '700': `700`,
    '900': `900`,
  },
  space: {
    none: `0`,
    small: `4px`,
    medium: `8px`,
    large: `16px`,
    extraLarge: `32px`,
  },
});

const layoutStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: 768px)` },
    desktop: { '@media': `screen and (min-width: 1024px)` },
  },
  defaultCondition: `mobile`,
  properties: {
    display: [`none`, `block`, `flex`],
    flexDirection: [`row`, `column`],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    width: [`16px`, `100%`],
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    fontStyle: [`normal`, `italic`, `oblique`, `initial`, `inherit`],
    fontFamily: [
      `Losta Bonita`,
      `Inter`,
      `Inconsolata`,
      `sans-serif`,
      `serif`,
      `monospace`,
    ],
    // etc.
  },
  shorthands: {
    padding: [`paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`],
    paddingX: [`paddingLeft`, `paddingRight`],
    paddingY: [`paddingTop`, `paddingBottom`],
  },
});

const colorStyles = defineProperties({
  properties: {
    color: vars.color,
    background: vars.color,
    // etc.
  },
});

export const atoms = createSprinkles(layoutStyles, colorStyles);
