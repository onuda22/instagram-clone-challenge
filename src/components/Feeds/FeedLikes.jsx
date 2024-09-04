import { View, Text } from "react-native";
import ReusableHeader from "../reusables/ReusableHeader";
import ReusableStoryAvatar from "../reusables/ReusableStory";

const LeftSideComponent = (props) => {
  const { friendLikes, totalLikes } = props.item.feed;
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        {/* first child */}
        {/* {props.item.feed.friendLikes.map((friendLike) => { */}
        {friendLikes.map((friendLike, index) => {
          return (
            <ReusableStoryAvatar
              key={`${friendLike.name}` + index}
              size={16}
              imageUrl={friendLike.imageUrl}
              hasActiveStory={false}
            />
          );
        })}
      </View>
      <Text style={{ fontWeight: "300" }}>
        {/* second child */}
        Liked by
        <Text style={{ fontWeight: "bold" }}>
          {" "}
          {friendLikes[0].name}{" "}
          <Text style={{ fontWeight: "300" }}>
            and{" "}
            <Text style={{ fontWeight: "bold" }}>{totalLikes - 1} others</Text>
          </Text>
        </Text>
      </Text>
    </>
  );
};

const FeedLikes = (props) => {
  return (
    <ReusableHeader
      backgroundColor={"lightgreen"}
      leftSideComponent={<LeftSideComponent {...props} />}
      rightSideComponent={null}
    />
  );
};

export default FeedLikes;
