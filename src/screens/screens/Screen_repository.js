import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback } from 'react' 
import {View,Text,StyleSheet,FlatList,Dimensions, Image, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'
const {width}=Dimensions.get("window")


const repository=(props)=>{
    
    
    useFocusEffect(
        useCallback(()=>{

            fetch(`https://api.github.com/repos/${props.route.params.owner}/${props.route.params.repository}/commits`,{
                method:'get',
                headers:new Headers({'X-Custom-Header': 'foobar', "Content-Type": "application/json","User-Agent":"MobileApp"}),
                })
                .then((response) => 
                response.json())
                .then((json)=>{                    
                    props.dispatch({type:"SET_DATA",payload:json})                   
                })
                .catch((err) => {
                    if (err.TypeError==="Network request failed"){
                        Alert.alert("Error Occured","Network error")
                    }
                })
        },[])
    )
    useFocusEffect(
        useCallback(()=>{
            props.dispatch({type:"SET_LOADED_FALSE"})
        },[])
    )
    
    if (!props.loaded){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <View style={{flex:1,paddingVertical:30}}>
           <FlatList 
           data={props.data}
           keyExtractor={(item,index)=>item.sha}
           renderItem={({item})=>{
               var re= /^\d$/;
               let isNum=re.test((item.sha.charAt(item.sha.length-1)))
               return (
                   <View style={style.box}>
                       {(!item.author) ? <View style={{height:40,width:40,borderWidth:1}}/> : <Image source={{uri:item.author.avatar_url}} style={{height:40,width:40,borderWidth:1}} />}
                        <View style={{flexDirection:'column'}}>
                            <Text style={[style.sha,{color:!isNum ? "black" : "yellow"}]}>{item.sha}</Text>
                            <Text style={{fontSize:9}}>{item.commit.author.email}</Text>
                        </View>
                   </View>
               )
           }}
           />
        </View>
    )
}

const style=StyleSheet.create({
    box:{
       width:width*0.9,
       height:50,
       flexDirection:'row',
       borderWidth:1,
       alignSelf:'center',
       marginBottom:10,
       alignItems:'center',
       justifyContent:'space-around',
       borderRadius:4
    },
    sha:{
        fontSize:11,
        fontWeight:'bold',
        
    }
})

const mapStateToProps=(state,actions)=>{
    return {
        data:state.Reducer.data,
        loaded:state.Reducer.loaded
    }
}

export default connect(mapStateToProps)(repository)