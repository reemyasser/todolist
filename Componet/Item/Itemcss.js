import { StyleSheet } from "react-native";

export const style= StyleSheet.create(
    {
     Viewcontainer:{
         backgroundColor:"papayawhip",
         borderWidth:0,
         borderRadius:10,
         overflow:"hidden",
         display:"flex",
         flexDirection:"row",
         width: 300,
         padding:5,
         margin:5,
         
     },
     text:{
       
        fontStyle:"italic",
        color:"black",
        width:"50%",
      
        
     },
     decore:{
        textDecorationLine: 'line-through',
        width:"50%",
        textDecorationStyle: 'solid',
     },
     btnview:{
         borderWidth:1,
         borderColor:"red",
         borderRadius:20,
         color:"white",
         backgroundColor:"red",
         marginRight:5
     }
     ,
     checkbox:{
         position:"absolute",
        right:0,
        justifyContent:"center",
        marginTop:7,
        marginRight:5
     },
    
    }
)