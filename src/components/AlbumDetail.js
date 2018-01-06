import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./cardSection";
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, url, thumbnail_image, image } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
           style={thumbnailStyle} 
           source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image 
          style={imageStyle} 
          source={{ uri: image }} />
      </CardSection>

    <CardSection>
    <Button onPress={() => Linking.openURL(url).catch(err => console.error('An error occurred', err))  }>Buy Now</Button>
    </CardSection>

    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentStyle: {
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});
