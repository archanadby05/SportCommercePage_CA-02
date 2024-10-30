import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ViewPager from "react-native-pager-view";

const HomeScreen = () => {
  const products = [
    {
      id: "1",
      title: "AIR LEGEND SPORT",
      category: "Apparel",
      price: "$240,000",
      image: require("../assets/image1.png"),
    },
    {
      id: "2",
      title: "AER SPORT INFINITY MAX",
      category: "Footwear",
      price: "$350,000",
      image: require("../assets/image2.png"),
    },
    {
      id: "3",
      title: "SPORT+ RUNNER BLUE EDITION",
      category: "Footwear",
      price: "$250,000",
      image: require("../assets/image3.png"),
    },
    {
      id: "4",
      title: "SPORT+ BAG",
      category: "Accessories",
      price: "$550,000",
      image: require("../assets/image4.png"),
    },
  ];

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.logo}>Sport Shoes</Text>
        <View style={styles.iconContainer}>
          <Ionicons name="search-outline" size={24} style={styles.icon} />
          <Ionicons name="heart-outline" size={24} style={styles.icon} />
          <Ionicons name="cart-outline" size={24} style={styles.icon} />
        </View>
      </View>

      <View style={styles.walletContainer}>
        <Text>Wallet Balance: $1,000,000</Text>
        <Button title="Top up" color="orange" />
      </View>

      <ImageBackground
        source={require("../assets/banner-pict.png")}
        style={styles.imageBackground}
      >
        <ViewPager style={styles.viewPager} initialPage={0}>
          <View key="1" style={styles.slider}>
            <Text style={styles.sliderText}>15% OFF</Text>
            <Text style={styles.sliderText}>ON</Text>
            <Text style={styles.sliderText}>ALL ITEMS</Text>
          </View>
          <View key="2" style={styles.slider}>
            <Text style={styles.sliderText}>FLASH SALE</Text>
          </View>
        </ViewPager>
      </ImageBackground>

      <View style={styles.categoryContainer}>
        <View style={styles.category}>
          <MaterialIcons name="sports-handball" size={24} color="orange" />
          <Text>FOOTWEAR</Text>
        </View>
        <View style={styles.category}>
          <MaterialIcons name="backpack" size={24} color="orange" />
          <Text>BAGS</Text>
        </View>
        <View style={styles.category}>
          <MaterialIcons name="checkroom" size={24} color="orange" />
          <Text>APPAREL</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.productCard}>
          <Image source={item.image} style={styles.productImage} />
          <Text>{item.title}</Text>
          <Text>{item.category}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
      ListHeaderComponent={renderHeader} 
    />
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10, 
      marginLeft: 10, 
    },
    logo: { 
      fontSize: 20, 
      fontWeight: "bold", 
      color: "#003366",
      marginRight: 20, 
    },
    iconContainer: { 
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    walletContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 5, 
      paddingHorizontal: 10, 
    },
    viewPager: {
      height: 150,
      marginVertical: 10,
      backgroundColor: "transparent",
    },
    slider: {
      justifyContent: "center",
      alignItems: "flex-end", 
      height: 150,
      backgroundColor: "transparent",
      paddingHorizontal: 20,
    },
    sliderText: {
      color: "#333",
      fontSize: 24,
      fontWeight: "bold",
      textShadowColor: "rgba(255, 255, 255, 0.5)",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
      marginTop: 5,
      textAlign: 'right',
    },
    categoryContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 10,
    },
    category: { alignItems: "center" },
    productCard: {
      flex: 1,
      margin: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
    },
    productImage: { width: "100%", height: 100, resizeMode: "cover" },
    price: { color: "#003366", fontWeight: "bold" }, 
    icon: { 
      color: "#003366", 
      marginRight: 5, 
    },
  });  

export default HomeScreen;
