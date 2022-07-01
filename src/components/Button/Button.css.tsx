// Button.css
// Language: typescript

// Scoped styles for `Button`.

import { recipe } from '@vanilla-extract/recipes';

import { atoms } from '@/styles/sprinkles.css';

export const buttonRecipe = recipe({
  variants: {
    kind: {
      primary: atoms({ background: `overlay`, color: `black` }),
      secondary: atoms({ background: `white`, color: `black` }),
      modalLeft: atoms({ background: `overlay`, color: `black` }),
      modalRight: atoms({ background: `overlay`, color: `black` }),
      thought: {
        lineHeight: `15px`,
        height: `fit-content`,
        padding: `0`,
      },
    },
  },
});

export type ButtonVariants = Parameters<typeof buttonRecipe>[0];
