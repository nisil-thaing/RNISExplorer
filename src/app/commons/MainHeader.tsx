import React from 'react';
import { View, TextInput } from 'react-native';
import { MAIN_HEADER_STYLES, COLORS } from '../style-sheets';

export default function Header(props: any) {
  return (
    <View style={ MAIN_HEADER_STYLES.container }>
      <View style={ MAIN_HEADER_STYLES.mainWrapper }>
        <TextInput
          style={ MAIN_HEADER_STYLES.searchInput }
          placeholder="Search"
          placeholderTextColor={ COLORS.FB_SEARCH_INPUT_PLACEHOLDER } />
      </View>
    </View>
  );
}