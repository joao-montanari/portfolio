import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import '../src/styles/main.sass';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    }  
  },
};

export default preview;