import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width:"90%",
        flexDirection:"row",
        paddingVertical: 10,
        justifyContent:"space-evenly",
        
    },
    buttonQuery:{
        width:50,
        height:30,
        backgroundColor:'#3366ff',
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