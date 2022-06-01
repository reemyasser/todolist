import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Header  from './Componet/Header/Header';
import Add from "./Componet/ADD/Add"
import Item from './Componet/Item/Item';
import { useEffect, useState } from 'react';

import List from './Componet/LIst/List';


export default function App() {
  let [count,setcount]=useState(0)
let [items,setitem]=useState([{id:Math.floor(Math.random() * 100) + 1 ,task:"Sa",counter:1,done:false},
{id:Math.floor(Math.random() * 100) + 1 ,task:"Sa",counter:2,done:false},{id:Math.floor(Math.random() * 100) + 1 ,task:"Sa",counter:3,done:true}]);
const addtask=(task)=>{
  console.log(task)
  setitem([...items,task])
}


useEffect(()=>{
 
  items.map((item)=>{ if(item.done===true){setcount(count+1)} })
},[])
const deleteItem=(task)=>{
  setitem(items.filter((item)=>{if(task.done)setcount(count-1); return(item.id!==task.id) }))
}
const changedone=(task)=>{

setitem(items.map((item)=>((item.id==task.id)?{...item, done:!task.done}:item )))
if(task.done===false)
{
 setcount(count+1)
}
else{
  setcount(count-1)
}
}
  return (
    <View style={styles.container}>
      <Header/>
      <Add addtask={addtask}/>
      <Text>done {count} of {items.length} </Text>
<List deleteItem={deleteItem} changedone={changedone} Listitem={items} />
      <Text style={{width:"100%",textAlign:"center",color:"white",fontSize:24, backgroundColor:"palevioletred"}}>footer</Text>
      <StatusBar hidden style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
});
