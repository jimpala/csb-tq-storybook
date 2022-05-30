import React, { PropsWithChildren, ReactElement } from "react";
import { Flex, FlexProps, Text, chakra } from "@chakra-ui/react";
import { numberToSignedString } from "../../../helpers";

export type WellbeingScoreSquareProps = FlexProps & {
  title: string;
  subtitle: string;
  icon: ReactElement;
  score: number;
  scoreChange?: number;
};

const WellbeingScoreSquare = ({
  title,
  subtitle,
  icon,
  score,
  scoreChange,
  ...props
}: PropsWithChildren<WellbeingScoreSquareProps>): ReactElement => {
  return (
    // Sensible max and min widths probably a good idea for this component.
    <Flex flexDir={"column"} bg={"black"} minW={24} maxW={40} {...props}>
      <Text as="h4" textStyle="b1" color="white">
        {title}
      </Text>
      <Text as="h5" textStyle="b1" color="white">
        {subtitle}
      </Text>
      {icon}
      <Text as="p" textStyle="b1" color="white">
        {score}/100
        {!!scoreChange && (
          <chakra.span>{numberToSignedString(scoreChange)}</chakra.span>
        )}
      </Text>
    </Flex>
  );
};

export default WellbeingScoreSquare;
