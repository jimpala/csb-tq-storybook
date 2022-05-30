import React, { PropsWithChildren, ReactElement } from "react";
import {
  Flex,
  FlexProps,
  Text,
  chakra,
  Square,
  Spacer,
} from "@chakra-ui/react";

export type MiniBadgeScoreCardProps = FlexProps & {
  title: string;
  score: number;
  badgeColour: string;
  badgeIcon: ReactElement;
  badgeSide?: "LEFT" | "RIGHT";
};

const MiniBadgeScoreCard = ({
  title,
  score,
  badgeColour,
  badgeIcon,
  badgeSide = "RIGHT",
  ...props
}: PropsWithChildren<MiniBadgeScoreCardProps>): ReactElement => {
  return (
    <Flex
      direction={badgeSide === "LEFT" ? "row-reverse" : "row"}
      align="stretch"
      bg={"white"}
      {...props}
    >
      <Flex direction="column" justify="flex-start" align="stretch">
        <Text as="h4" textStyle="b1" color="black">
          {title}
        </Text>
        <Text as="p" textStyle="b1" color="black">
          {score}/100
        </Text>
      </Flex>
      <Spacer />
      <Square bg={badgeColour}>{badgeIcon}</Square>
    </Flex>
  );
};

export default MiniBadgeScoreCard;
