import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.white,
    height: '100%',
    width: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    color: '#000000',
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 25,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  todoContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#555555',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoContainerText: {
    fontSize: 25,
    marginHorizontal: 10,
    color: Colors.white,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  deleteText: {
    fontSize: 25,
    marginHorizontal: 10,
    color: '#FF0000',
  },
  editText: {
    fontSize: 25,
    marginHorizontal: 10,
    color: '#ffffff',
  },
});
