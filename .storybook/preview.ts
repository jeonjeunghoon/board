import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { withRecoilFlow } from 'storybook-addon-recoil-flow/dist/decorator';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withRouter, withRecoilFlow],
};

export default preview;
