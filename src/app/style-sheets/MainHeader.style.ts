import { StyleSheet } from 'react-native';

import { COLORS } from './variables.constant';

export const MAIN_HEADER_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    maxHeight: 90,
    backgroundColor: COLORS.FB_HEADER,
    paddingTop: 45,
    paddingBottom: 5
  },
  mainWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionIcon: {
    flex: 1,
    textAlign: 'center'
  },
  searchInput: {
    flex: 9,
    height: 40,
    maxHeight: 40,
    backgroundColor: COLORS.FB_SEARCH_INPUT,
    color: COLORS.WHITE,
    borderColor: COLORS.FB_SEARCH_INPUT,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  }
});