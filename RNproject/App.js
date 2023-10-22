import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,      //it will take 100% height
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,       //it will take 20%  (1/5) height
    flexDirection:'row',
    justifyContent:'space-between',
    gap:8,
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderColor:'#ccc'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#ccc',
    width:'70%',
    padding:8
  },
  goalsContainer:{
    flex:4
  }
});
