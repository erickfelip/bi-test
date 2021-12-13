import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width:"85%",
        height:'auto',
        backgroundColor:'#3F3F3F',
        borderRadius:10,
        marginLeft:'6%',
        marginTop:10,
        marginBottom: 25,
        flexDirection:'row',
        alignItems:'center',
        padding:12,
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:5,
        color:'#fff',
        fontWeight:"bold",
    },
    price:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:16,
    },
    contextLeft:{
        width:"40%",
        height:"100%",
        alignItems:"flex-start"
    },
    contextRight:{
        width:"60%",
        alignItems:"flex-end",
    },

        
});

export default styles