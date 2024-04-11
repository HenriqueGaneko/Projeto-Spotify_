import { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, Image, FlatList } from "react-native";

export default function Search() {
    const [musicData, setMusicData] = useState();
    const [query, SetQuery] = useState("");

    useEffect(() => {
        fetch("http://10.0.2.2:3000/musics")
            .then((response) => response.json())
            .then((data) => setMusicData(data))
    }, [])

    const filteredMusic = query ?
        musicData.filter(item => item.title.includes(query.toLowerCase()))
        : musicData;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#121212" />
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar musicas"
                placeholderTextColor="#cccccc"
                value={query}
                onChangeText={(text) => SetQuery(text)}
            />
            <FlatList data={musicData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image style={styles.albumImage}
                            source={{ uri: `http://10.0.2.2:3000/assets/${item.album_image}` }} />
                        <View style={styles.textContainer}>
                            <Text style={styles.detailText}>{item.title}</Text>
                            <Text style={styles.detailText}>{item.group}</Text>
                            <Text style={styles.detailText}>{item.year}</Text>
                            <Text style={styles.detailText}>{item.genre}</Text>
                        </View>
                    </View>
                )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingTop: 16,
    },
    searchInput: {
        height: 50,
        backgroundColor: "#2C2C2C",
        borderRadius: 6,
        padding: 10,
        color: "#ffffff",
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    noResultsText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#333333",
        borderRadius: 6,
        overflow: "hidden",
    },
    albumImage: {
        width: 100,
        height: 100,
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    titleText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    detailText: {
        color: "#dddddd",
        fontSize: 14,
    },
});