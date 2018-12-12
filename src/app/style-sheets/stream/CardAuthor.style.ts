import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../variables.constant';

const AVATAR_WIDTH = 40;
const PADDING = 10;
const avatarRadius = AVATAR_WIDTH / 2;
const windowWidth = Dimensions.get('window').width;
const infoWrapperWidth = windowWidth - AVATAR_WIDTH - 3 * PADDING;

export const CARD_AUTHOR_STYLES = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: PADDING,
    backgroundColor: COLORS.WHITE,
  },
  avatarWrapper: {
    flexDirection: 'row'
  },
  avatarPhoto: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderWidth: 1,
    borderColor: COLORS.SEPARATE_LINE,
    borderRadius: avatarRadius
  },
  contentRight: {
    width: infoWrapperWidth,
    marginLeft: PADDING
  },
  infoWrapper: {
    flexDirection: 'row'
  },
  timestamp: {
    flexDirection: 'row'
  },
  boldItem: {
    fontWeight: 'bold'
  },
  titleItem: {
    fontSize: 16,
    lineHeight: 23,
    flexWrap: 'wrap'
  },
  timestampText: {
    fontSize: 12,
    lineHeight: 17,
    flexWrap: 'wrap'
  }
})