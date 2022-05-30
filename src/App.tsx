import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import Frame from "./components/TestComponent";
import BadgeScoreCard from "./components/dashboard/BadgeScoreCard";
import GroupPercentageSquare from "./components/dashboard/GroupPercentageSquare";
import MiniBadgeScoreCard from "./components/dashboard/MiniBadgeScoreCard";
import QuestionScoreCard from "./components/dashboard/QuestionScoreCard";
import ResourceCard from "./components/dashboard/ResourceCard";
import ScoreTag from "./components/dashboard/ScoreTag";
import WellbeingScoreSquare from "./components/dashboard/WellbeingScoreSquare";
import WeeklyQuestionScoreCard from "./components/dashboard/WeeklyQuestionScoreCard";
import {
  Default as BadgeScoreCardDefault,
  BadgeLeft as BadgeScoreBadgeLeft,
  MultipleScores,
} from "./components/dashboard/BadgeScoreCard/index.stories";
import { Default as GroupPercentageSquareDefault } from "./components/dashboard/GroupPercentageSquare/index.stories";
import {
  Default as MiniBadgeScoreCardDefault,
  BadgeLeft as MiniBadgeScoreBadgeLeft,
} from "./components/dashboard/MiniBadgeScoreCard/index.stories";
import { Default as QuestionScoreCardDefault } from "./components/dashboard/QuestionScoreCard/index.stories";
import {
  Default as ResourceCardDefault,
  WithoutBadge,
} from "./components/dashboard/ResourceCard/index.stories";
import {
  Default as ScoreTagDefault,
  PositiveChange,
  NegativeChange,
} from "./components/dashboard/ScoreTag/index.stories";
import { Default as WeeklyQuestionScoreCardDefault } from "./components/dashboard/WeeklyQuestionScoreCard/index.stories";
import { Default as WellbeingScoreSquareDefault } from "./components/dashboard/WellbeingScoreSquare/index.stories";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Frame>
        {/*@ts-ignore*/}
        <ScoreTag {...Default.args} />
      </Frame>
    </ChakraProvider>
  );
}

export default App;
