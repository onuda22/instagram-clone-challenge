import { FontAwesome6 } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native";
import ReusableHeader from "../reusables/ReusableHeader";
import { useState } from "react";

const LeftSideComponent = (props) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setIsLike(!isLike)}>
        <FontAwesome6
          name="heart"
          size={20}
          color={isLike ? "red" : "black"}
          {...(isLike ? { solid: true } : {})}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6 name="comment" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6 name="paper-plane" size={20} color="black" />
      </TouchableOpacity>
    </>
  );
};

const RightSideComponent = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome6 name="bookmark" size={20} color="black" />
    </TouchableOpacity>
  );
};

const FeedActions = (props) => {
  return (
    <ReusableHeader
      paddingVertical={10}
      leftSideComponent={<LeftSideComponent {...props} />}
      rightSideComponent={RightSideComponent(props)} // sama saja dengan diatas
    />
  );
};

export default FeedActions;
