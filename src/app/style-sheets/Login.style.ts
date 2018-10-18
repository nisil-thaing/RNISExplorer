import { StyleSheet } from 'react-native';

export const LOGIN_PAGE_STYLES = StyleSheet.create({
  hidden: {
    display: 'none',
    position: 'relative'
  },
  disabled: {
    backgroundColor: 'grey'
  },
  container: {
    position: 'relative',
    flex: 1,
    width: '100%'
  },
  heading: {
    marginTop: 40,
    alignItems: 'center'
  },
  logo: {
    width: 66,
    height: 55
  },
  headingTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  loginForm: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    padding: 20,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    borderRadius: 4
  },
  submit: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#48bbec',
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  submitText: {
    fontSize: 18,
    color: '#fff'
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});