import { View, Text } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Comment = () => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    handlePresentModalPress();
  }, [0]);
  return (
    <BottomSheetModal snapPoints={snapPoints} ref={bottomSheetModalRef}>
      <View>
        <Text>Comment</Text>
      </View>
    </BottomSheetModal>
  );
};

export default Comment;
