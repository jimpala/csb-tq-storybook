import React, { PropsWithChildren, ReactElement } from "react";
import {
  Flex,
  FlexProps,
  Text,
  chakra,
  Square,
  Spacer,
} from "@chakra-ui/react";
import {numberToSignedString} from "../../../helpers";

export type BadgeScoreCardInfo = {
  title: string;
  score: number;
  scoreChange?: number;
};

type ScoreSectionProps = FlexProps & BadgeScoreCardInfo;

export type BadgeScoreCardProps = FlexProps & {
  info: BadgeScoreCardInfo | BadgeScoreCardInfo[];
  badgeColour: string;
  badgeIcon: ReactElement;
  badgeSide?: "LEFT" | "RIGHT";
};

function isInfoArray(
  prop: BadgeScoreCardInfo | BadgeScoreCardInfo[]
): prop is BadgeScoreCardInfo[] {
  return (prop as BadgeScoreCardInfo[]).length !== undefined;
}

const ScoreSection = ({
  score,
  title,
  scoreChange,
  ...props
}: PropsWithChildren<ScoreSectionProps>): ReactElement => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="stretch"
      {...props}
    >
      <Text as="h4" textStyle="b1" color="black">
        {title}
      </Text>
      <Text as="p" textStyle="b1" color="black">
        {score}/100
        {!!scoreChange && (
          <chakra.span>
            {numberToSignedString(scoreChange)}
          </chakra.span>
        )}
      </Text>
    </Flex>
  );
};

const BadgeScoreCard = ({
  info,
  badgeColour,
  badgeIcon,
  badgeSide = "RIGHT",
  ...props
}: PropsWithChildren<BadgeScoreCardProps>): ReactElement => {
  return (
    <Flex
      direction={badgeSide === "LEFT" ? "row-reverse" : "row"}
      align="stretch"
      bg={"white"}
      {...props}
    >
      {isInfoArray(info) ? (
        // If info is an array, map multiple score boxes.
        info.map((x) => (
          <ScoreSection
            key={x.title}
            title={x.title}
            score={x.score}
            scoreChange={x.scoreChange}
          />
        ))
      ) : (
        // Regular case (info is single object).
        <ScoreSection
          key={info.title}
          title={info.title}
          score={info.score}
          scoreChange={info.scoreChange}
        />
      )}
      <Spacer />
      <Square bg={badgeColour}>{badgeIcon}</Square>
    </Flex>
  );
};

export default BadgeScoreCard;
