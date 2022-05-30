import React, { PropsWithChildren, ReactElement } from "react";
import {
  Flex,
  FlexProps,
  Text,
  chakra,
  Circle,
  Progress,
} from "@chakra-ui/react";
import { numberToSignedString } from "../../../helpers";

export type GroupPercentageSquareProps = FlexProps & {
  title: string;
  icon: ReactElement;
  percentage: number;
};

const GroupPercentageSquare = ({
  title,
  icon,
  percentage,
  ...props
}: PropsWithChildren<GroupPercentageSquareProps>): ReactElement => {
  return (
    // Sensible max and min widths probably a good idea for this component.
    <Flex flexDir={"column"} bg={"gray.100"} minW={24} maxW={40} {...props}>
      <Flex align={"center"}>
        <Circle size={8} bg={"black"}>
          {icon}
        </Circle>
        <Text as="h4" textStyle="b1" color="black">
          {title}
        </Text>
      </Flex>
      <Text as="p" textStyle="b1" color="black">
        {percentage}%
      </Text>
      <Progress value={percentage} size={"xs"} />
    </Flex>
  );
};

export default GroupPercentageSquare;
