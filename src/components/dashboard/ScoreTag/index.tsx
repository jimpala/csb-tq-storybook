import React, { PropsWithChildren, ReactElement } from "react";
import { Flex, FlexProps, chakra, Text } from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";

export type ScoreTagProps = FlexProps & {
  score: number;
  positiveChange?: boolean;
};

const ScoreTag = ({
  score,
  positiveChange,
  ...props
}: PropsWithChildren<ScoreTagProps>): ReactElement => {
  return (
    <Flex bg={"gray.200"} align={"center"} {...props}>
      <Text as="h5" textStyle="b1" color="black">
        <chakra.span>{score}</chakra.span>
        /100
      </Text>
      {typeof positiveChange === "undefined" ? null : positiveChange ? (
        <TriangleUpIcon w={4} h={4} />
      ) : (
        <TriangleDownIcon w={4} h={4} />
      )}
    </Flex>
  );
};

export default ScoreTag;
