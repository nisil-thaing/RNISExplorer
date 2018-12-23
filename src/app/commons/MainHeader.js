import React from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import { MAIN_HEADER_STYLES, COLORS } from '../style-sheets';

export default function Header() {
  return (
    <View style={ MAIN_HEADER_STYLES.container }>
      <View style={ MAIN_HEADER_STYLES.mainWrapper }>
        <View style={ MAIN_HEADER_STYLES.actionIcon }>
          <Icon
            name='camera'
            type='entypo'
            size={ 24 }
            color={ COLORS.WHITE } />
        </View>
        <TextInput
          style={ MAIN_HEADER_STYLES.searchInput }
          placeholder="Search"
          placeholderTextColor={ COLORS.FB_SEARCH_INPUT_PLACEHOLDER } />
        <View style={ MAIN_HEADER_STYLES.actionIcon }>
          <Icon
            name='facebook-messenger'
            type='material-community'
            size={ 24 }
            color={ COLORS.WHITE } />
        </View>
      </View>
    </View>
  );
}