import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

const getStoryFrameWidth = (size) => (6 / 60) * size;

const HasActiveStory = ({
  hasAlreadyViewed,
  storyFrameWidth,
  size,
  imageUrl,
}) =>
  hasAlreadyViewed ? (
    <View
      style={{
        height: size + storyFrameWidth + 1,
        width: size + storyFrameWidth + 1,
        borderRadius: size + storyFrameWidth / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "black",
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{ height: size, width: size, borderRadius: size / 2 }}
      />
    </View>
  ) : (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["yellow", "darkviolet"]}
      style={{
        height: storyFrameWidth * 2 + size,
        width: storyFrameWidth * 2 + size,
        borderRadius: size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: storyFrameWidth + size,
          width: storyFrameWidth + size,
          borderRadius: size + storyFrameWidth / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            borderWidth: 3,
            borderColor: "black",
          }}
        />
      </View>
    </LinearGradient>
  );

const ReusableStoryAvatar = (props) => {
  const storyFrameWidth = getStoryFrameWidth(props.size);

  return props.hasActiveStory ? (
    <HasActiveStory
      size={props.size}
      imageUrl={props.imageUrl}
      hasAlreadyViewed={props.hasAlreadyViewed}
      storyFrameWidth={storyFrameWidth}
    />
  ) : (
    <Image
      source={{ uri: props.imageUrl }}
      style={{
        height: props.size,
        width: props.size,
        borderRadius: props.size / 2,
      }}
    />
  );
};

export default ReusableStoryAvatar;
