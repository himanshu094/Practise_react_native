import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoal,setEnteredGoal]=useState('')
  const [goalList,setGoalList] = useState([])

  function goalInputHandler(enteredText){
   // console.log(enteredText);
   setEnteredGoal(enteredText)
  }
  function addGoalHandler(){
    setGoalList((lastGoals)=>[...lastGoals, enteredGoal])
    setEnteredGoal('')
  }
  return (
    <ScrollView style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoal} onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {
        goalList.map((goal,i)=>{
         return( 
          <View  key={i}  style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>)
        })
        }
      </View>

    </ScrollView>
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
    paddingBottom:12,
    marginBottom:24,
    borderBottomWidth:1,
    borderColor:'#ccc'
  },
  textInput:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#ccc',
    width:'70%',
    padding:8
  },
  goalsContainer:{
    flex:5
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
  },
  goalText:{
    color:'#fff'
  }
});
