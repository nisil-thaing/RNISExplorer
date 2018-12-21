import { StyleSheet } from 'react-native';

import { COLORS } from './variables.constant';

export const MAIN_FOOTER_STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.SEPARATE_LINE,
    paddingTop: 10,
    paddingBottom: 30
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {}
});