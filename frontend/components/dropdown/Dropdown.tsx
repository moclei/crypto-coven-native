import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";

import Body1 from "../typography/Body1";
import Header2 from "../typography/Header2";

const DropdownContainerStyle = styled.View`
  width: 200px;
  border-radius: 8px;
  border-width: 1px;
  border-color: white;
  padding: 0 8px;
`;
const DropdownItemStyled = styled.View`
  padding: 2px 12px;
`;

const DropdownStyled = styled.View`
  width: 120px;
  height: 0;
  background-color: #1e2125;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 2000;
`;

type ItemSelect = {
  label: string;
  value: string;
};

type DropdownProps = {
  items: ItemSelect[];
  selected?: ItemSelect;
  label?: string;
};

const DROPDOWN_HEIGHT = 175;

const Dropdown = ({ items, label, selected = null }: DropdownProps, ref) => {
  const [selectedItem, setSelectedItem] = useState<ItemSelect>(selected);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const boxHeight = useSharedValue(0);
  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      setIsOpen(!isOpen);
      toggleHeight();
    },
    [isOpen]
  );
  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    onOutsidePress: () => {
      if (isOpen) {
        onPress(null);
      }
    },
  }));

  const boxAnimation = useAnimatedStyle(() => {
    return {
      height: withTiming(boxHeight.value, { duration: 50 }),
    };
  });
  function toggleHeight() {
    boxHeight.value === DROPDOWN_HEIGHT
      ? (boxHeight.value = 0)
      : (boxHeight.value = DROPDOWN_HEIGHT);
  }
  const styles = {
    box: {
      backgroundColor: "#1e2125",
      borderRadius: 8,
      display: "flex",
      height: 0,
      width: 400,
    },
  };

  const onItemSelect = useCallback((selected: ItemSelect) => {
    setSelectedItem(selected);
  }, []);

  const renderItem = (item: ItemSelect) => {
    return (
      <DropdownItemStyled key={item.value}>
        <TouchableOpacity>
          <Body1 color={"white"}>{item.label}</Body1>
        </TouchableOpacity>
      </DropdownItemStyled>
    );
  };

  return (
    <DropdownContainerStyle ref={ref}>
      <TouchableOpacity onPress={onPress}>
        <Header2
          color={"white"}
          padding={"4px 0"}
          style={{ fontSize: 32, lineHeight: 32 }}
        >
          {label || selectedItem?.label || "Select one..."}
        </Header2>
        {/*ArrowIcon*/}
      </TouchableOpacity>
      <DropdownStyled>
        <Animated.View style={[styles.box, boxAnimation]}>
          {items.map((i) => renderItem(i))}
        </Animated.View>
      </DropdownStyled>
    </DropdownContainerStyle>
  );
};

export default forwardRef(Dropdown);
