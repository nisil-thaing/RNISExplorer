import { StyleSheet } from 'react-native';
import { COLORS } from '../variables.constant';

export const SOCIAL_ACTIVITY_STYLES = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.SEPARATE_LINE,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: 10
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    lineHeight: 36,
    height: 36,
    width: 36,
    textAlign: 'center'
  }
});