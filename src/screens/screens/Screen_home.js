import React from 'react' 
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const home=(props)=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={style.box} onPress={()=>props.navigation.navigate("REPOSITORY",{owner:"facebook",repository:'React-Native'})}>
                <Text style={style.text}>REACT-NATIVE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.box} onPress={()=>props.navigation.navigate("REPOSITORY",{owner:'flutter',repository:"Flutter"})}>
                <Text style={style.text}>FLUTTER</Text>
            </TouchableOpacity>
        </View>
    )
}

const style=StyleSheet.create({
    box:{
        padding:15,
        marginBottom:10,
        backgroundColor:'#4FC3F7'
    },
    text:{
        color:'white'
    }
})

export default home