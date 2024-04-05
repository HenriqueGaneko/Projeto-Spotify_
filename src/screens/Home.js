import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPLaying, setCurrentPLaying] = useState(null);
  const [musicData, setMusicData] = useState([]);
  const item = {
    id: 1,
    title:"Highway To Hell",  
    group:"AC/DC",
    album_image:"https://vinils3.s3.amazonaws.com/wp-content/uploads/2019/02/21115421/ac-cd-highway-to-hell3.jpg",
    album: "Highway To Hell",
    year: 1970,
    genre: "Heavy Metal",
  };

  useEffect(()=> {fetch("http://10.0.2.2:3000/musics").then((response) => response.json()).then((data)=> setMusicData(data))},[])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <FlatList data={musicData} keyExtractor={(item)=> item.id.toString()} renderItem={({item}) =>(<MusicItem 
      isPlaying={()=>currentPLaying == item.id} music={item} navigation={navigation} onPlayPause={()=>{}}/>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"#fff",
    marginBottom:20,
    marginLeft:20,  
  },
})