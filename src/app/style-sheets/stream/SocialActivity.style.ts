import { StyleSheet } from 'react-native';
import { COLORS } from '../variables.constant';

export const SOCIAL_ACTIVITY_STYLES = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  socialStatistic: {
    flexDirection: 'row',
    marginBottom: 10
  },
  socialStatReactionsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  statisticIconWrapper: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  statisticIcon: {
    fontSize: 12,
    color: COLORS.WHITE
  },
  buttonsWrapper: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: COLORS.SEPARATE_LINE
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
    marginRight: 5
  }
});