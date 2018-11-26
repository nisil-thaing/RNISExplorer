import { StyleProp, TextStyle } from 'react-native';

import { COLORS } from './variables.constant';

export const MAIN_HEADER_STYLES = {
  container: {
    flex: 1,
    height: 90,
    maxHeight: 90,
    backgroundColor: COLORS.FB_HEADER,
    paddingTop: 45,
    paddingBottom: 5
  } as StyleProp<TextStyle>,
  mainWrapper: {
    flex: 1
  } as StyleProp<TextStyle>,
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.FB_SEARCH_INPUT,
    color: COLORS.WHITE,
    borderColor: COLORS.FB_SEARCH_INPUT,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  } as StyleProp<TextStyle>
}