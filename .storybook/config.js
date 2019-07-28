import { configure, addDecorator } from '@storybook/react';
import withGlobalStyles from './decorators/withGlobalStyles'

const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withGlobalStyles)
configure(loadStories, module);