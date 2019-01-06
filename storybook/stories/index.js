import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';
import { CardContentImage } from '../../src/app/components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf('CardContentImage', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with 1 image content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with 2 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with 3 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with 4 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with 5 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with 6 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  })
  .add('with more than 6 images content', () => {
    const images = [require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg'), require('../../src/assets/27573875_363298654140769_4881900956687532032_n.jpg')];
    return (<CardContentImage images={images} />);
  });