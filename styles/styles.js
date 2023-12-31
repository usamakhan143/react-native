import {StyleSheet} from 'react-native';

export default Styles = StyleSheet.create({
  textBox: {
    color: 'white',
    backgroundColor: 'purple',
    padding: 20,
    fontSize: 20,
    margin: 10,
    borderRadius: 15,
  },

  mainLogin: {
    margin: 10,
  },

  mainHeading: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 50,
    color: '#000',
    fontWeight: 600,
  },

  textInputs: {
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
  },

  validationErrors: {
    color: 'red',
    padding: 0,
    margin: 0,
    fontSize: 16,
  },

  container: {
    flexDirection: 'row',
    paddingHorizontal: 16, // Adjust padding as needed
    paddingVertical: 8, // Adjust padding as needed
    backgroundColor: 'purple',
    margin: 10,
    borderRadius: 8,
  },
  column: {
    padding: 16, // Adjust padding as needed
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
