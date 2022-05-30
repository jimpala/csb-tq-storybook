import React, { PropsWithChildren, ReactElement } from "react";
import {Flex, FlexProps, Square, Text, Center, Tooltip} from "@chakra-ui/react";

export type WeeklyQuestionBarInfo = {
  percentage: number;
  answer: string;
};

export type WeeklyQuestionScoreCardProps = FlexProps & {
  title: string;
  question: string;
  badgeColour: string;
  badgeIcon: ReactElement;
  // Assume that array of %ages are from positive to negative answer.
  responses: WeeklyQuestionBarInfo[];
};

const barColours: string[] = [
  "gray.300",
  "gray.400",
  "gray.500",
  "gray.600",
  "gray.700",
];

const WeeklyQuestionScoreCard = ({
  title,
  question,
  badgeColour,
  badgeIcon,
  responses,
  ...props
}: PropsWithChildren<WeeklyQuestionScoreCardProps>): ReactElement => {
  return (
    <Flex alignItems={"center"} {...props}>
      <Square size={12} bg={badgeColour}>
        {badgeIcon}
      </Square>
      <Flex direction="column" justify="flex-start" align="stretch" flex={1}>
        <Text as="h4" textStyle="b1" color="black">
          {title}
        </Text>
        <Text as="p" textStyle="b1" color="black">
          {question}
        </Text>
        <Flex
          h={8}
          direction="row"
          justify="flex-start"
          align="stretch"
          borderRadius={"md"}
          overflow={"hidden"}
        >
          {responses.map<ReactElement>((x, ix) => {
            const xBarColour = barColours[ix % barColours.length];
            return (
              <Flex bg={xBarColour} flex={x.percentage} key={x.answer}>
                <Tooltip label={x.answer}>
                  <Center w={"full"}>
                    <Text cursor={"default"} as="p" textStyle="b1" color="white">
                      {x.percentage.toString()}%
                    </Text>
                  </Center>
                </Tooltip>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WeeklyQuestionScoreCard;
