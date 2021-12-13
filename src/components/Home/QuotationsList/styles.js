import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width:"80%",
        flexDirection:"row",
        paddingVertical: 15,
        justifyContent:"space-evenly",
        
    },
    buttonQuery:{
        width:50,
        height:30,
        backgroundColor:'#3F3F3F',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    textButtonQuery:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:14,
    }
});

export default styles