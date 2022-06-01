
import { useState } from "react";
import { View ,Text, ScrollView, FlatList} from "react-native";
import Item from "../Item/Item";


export default function List({deleteItem,Listitem,changedone}) {
// console.log(Listitem)


    return (

            <FlatList 
  data={Listitem}
  renderItem={({item})=>{
      return(
<Item deleteItem={deleteItem} changedone={changedone} item={item}/>)
}}
keyExtractor={(item, index) => `${index}`}
  />
       
    )
}