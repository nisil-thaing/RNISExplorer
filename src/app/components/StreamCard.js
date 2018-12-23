import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { STREAM_CARD_STYLES } from '../style-sheets';
import CardAuthor from './CardAuthor';
import CardContent from './CardContent';
import SocialActivity from './SocialActivity';

export default function StreamCard(props) {
  return (
    <View style={[ props.style, STREAM_CARD_STYLES.container ]}>
      <CardAuthor></CardAuthor>
      <CardContent style={{ marginTop: 10 }}></CardContent>
      <SocialActivity style={{ marginTop: 10 }}></SocialActivity>
    </View>
  );
}

StreamCard.propTypes = {
  style: PropTypes.object
};