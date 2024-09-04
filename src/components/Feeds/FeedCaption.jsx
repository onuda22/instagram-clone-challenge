import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

//TODO: branch name suggestion: challenge-hari-ketiga
// TODO: buat agar text more-nya sejajar dengan caption, sebelum di klik more itu caption yang tampil maksimal 2 baris
// TODO: dan setelah di klik more nya, semua caption tampil
const FeedCaption = (props) => {
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        numberOfLines={isMoreVisible ? 99 : 2}
        ellipsizeMode="tail"
        style={{ fontWeight: "300", alignItems: "center" }}
      >
        <Text style={{ fontWeight: "600" }}>{props.item.username}</Text>{" "}
        {props.item.feed.caption}
      </Text>

      <TouchableOpacity onPress={() => setIsMoreVisible(!isMoreVisible)}>
        <Text
          style={{
            textAlign: "left",
            display: `${isMoreVisible ? "none" : "flex"}`,
          }}
        >
          ... more
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedCaption;
