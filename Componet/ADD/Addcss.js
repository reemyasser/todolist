import { StyleSheet } from "react-native";

export const style= StyleSheet.create(
    {
      input:{
          color:"palevioletred",
       
          borderWidth:2,
          borderRadius:20,
          borderColor:"palevioletred",
          margin:10,
          padding:5,
          flexGrow:1,
          width: 200
   
      },
      view:{
        margin:10,
        
          width:'25%',
          borderRadius:20,
          borderWidth:0,
          overflow:"hidden"

      },
      viewcontainer:{
        display:"flex",
        flexDirection:"row",
      },
      err:{
          display:"flex",
          flexDirection:'column',
          color:"red"
      },
      viewiput:{
          display:"flex",
          flexDirection:"column"
      }
    }
)