import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { MAIN_FOOTER_STYLES, COLORS } from '../style-sheets';

export default function MainFooter() {
  return (
    <View style={ MAIN_FOOTER_STYLES.container }>
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='newspaper'
        type='material-community'
        size={ 24 }
        color={ COLORS.FB_HEADER } />
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='users'
        type='feather'
        size={ 18 } />
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='youtube-tv'
        type='material-community'
        size={ 26 } />
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='user'
        type='feather'
        size={ 18 } />
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='ios-notifications-outline'
        type='ionicon'
        size={ 24 } />
      <Icon
        iconStyle={ MAIN_FOOTER_STYLES.icon }
        containerStyle={ MAIN_FOOTER_STYLES.iconWrapper }
        name='three-bars'
        type='octicon'
        size={ 24 } />
    </View>
  );
}