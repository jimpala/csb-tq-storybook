import React, { PropsWithChildren, ReactElement } from "react";
import {
  Flex,
  Text,
  FlexProps,
  Square,
  Spacer,
  chakra,
} from "@chakra-ui/react";

export type QuestionScoreCardProps = FlexProps & {
  question: string;
  date: string;
  score: number;
  badgeColour: string;
  badgeIcon: ReactElement;
};

const QuestionScoreCard = ({
  question,
  date,
  score,
  badgeColour,
  badgeIcon,
  ...props
}: PropsWithChildren<QuestionScoreCardProps>): ReactElement => {
  return (
    <Flex align={"center"} {...props}>
      <Square size={10} bg={badgeColour}>{badgeIcon}</Square>
      <Flex direction="column" justify="flex-start" align="stretch">
        <Text as="h4" textStyle="b1" color="black">
          {question}
        </Text>
        <Text as="h5" textStyle="b1" color="black">
          {date}
        </Text>
      </Flex>
      <Spacer />
      <Text as="p" textStyle="b1" color="black">
        {score}/100
      </Text>
    </Flex>
  );
};

export default QuestionScoreCard;
