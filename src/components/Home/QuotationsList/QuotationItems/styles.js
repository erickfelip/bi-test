import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width:"80%",
        height:'auto',
        backgroundColor:'#3366ff',
        borderRadius:10,
        marginLeft:'1%',
        marginBottom: 15,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color:'#fff',
        fontWeight:"bold",
    },
    price:{
        color:'#fff',
        fontWeight:"bold",
        fontSize:16,
    },
    contextLeft:{
        width:"36%",
        height:"100%",
        alignItems:"flex-start"
    },
    contextRight:{
        width:"60%",
        alignItems:"flex-end",
    },

        
});

export default styles