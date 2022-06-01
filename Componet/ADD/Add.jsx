import { useState } from "react";
import { View ,Text, TextInput, Button} from "react-native";
import { style } from "./Addcss";

let count=1;
export default function Add({addtask}) {
let [task,settask]=useState("");
let [err,setError]=useState("");
const chang=(text)=>{
        if(task.length<3)
        {
            setError("the range of char start from 3")
        }
        else{
            setError("")
        }
        settask(text)
    
    }



const additem=()=>{

    const onetask={
        id:Math.floor(Math.random() * 100) + 1 ,
        task:task,
        counter:count+1,
        done:false
    }
    if(onetask.task.length>3){
   onetask.task&&addtask(onetask)}
   chang("")
}
    return (
        <View style={style.viewcontainer} > 
        <View style={style.viewiput}>
        <TextInput value={task} onChangeText={chang}  style={style.input} placeholder="Add your task"/>
        <Text style={style.err}> {err}</Text>
        </View>
        <View  style={style.view}>
        <Button color={"palevioletred"} onPress={additem} title="Add"/>
        </View>
        </View>
    )
}