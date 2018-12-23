import { StyleSheet } from 'react-native';

import { COLORS } from '../variables.constant';

export const NEW_STATUS_INPUT_STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.SEPARATE_LINE,
    padding: 10
  },
  inputWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  avatarPhoto: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.SEPARATE_LINE,
    borderRadius: 20
  },
  statusInput: {
    fontSize: 20,
    lineHeight: 40,
    marginLeft: 10
  }
});