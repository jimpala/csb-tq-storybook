import React, {PropsWithChildren, ReactElement} from 'react';
import {Box, BoxProps} from "@chakra-ui/react";

export type TestComponentProps = BoxProps & {}

const TestComponent = ({...props}: PropsWithChildren<TestComponentProps>): ReactElement => {
  return (
    <Box h={16} w={16} bg={"brandTurquoise"} color={"white"} {...props}>
      Hello
    </Box>
  );
};

export default TestComponent;
