/** @format */

import { AppRegistry } from 'react-native';
import Config from 'react-native-config';

import { name as appName } from './app.json';
import App from './src/app';
import StorybookUIRoot from './storybook';

AppRegistry.registerComponent(appName, () => Config.IS_STORYBOOK ? StorybookUIRoot : App);
