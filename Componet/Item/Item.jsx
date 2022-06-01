import Checkbox from "expo-checkbox";
import { useState } from "react";
import { View ,Text, Button, TouchableOpacity} from "react-native";
import { style } from "./Itemcss";


export default function Item({item,changedone,deleteItem}) {

    const changedone1=(e)=>{
      
        changedone(item)
    }
    const deleteItem1=()=>{
        console.log(item)
        deleteItem(item)
    }
console.log(item)
    return (
        <View  style={style.Viewcontainer}> 
          
          <TouchableOpacity  onPress={deleteItem1} >
              <Text style={style.btnview}> X</Text>
              </TouchableOpacity>
        
            <Text style={item.done?style.decore:style.text}>
                {item.task}
            </Text>
            {
            item.done && <Text style={{fontSize:20}}>💃💃🎈</Text> 
                
            }
            <View style={style.checkbox}  >
            <Checkbox   onValueChange={changedone1} value={item.done} ></Checkbox>
            </View>
        </View>
    )
}