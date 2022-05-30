import React, {PropsWithChildren, ReactElement} from 'react';
import {Box, BoxProps, Center, CenterProps} from "@chakra-ui/react";

export type FrameProps = CenterProps & {}

const Frame = ({children, ...props}: PropsWithChildren<FrameProps>): ReactElement => {
  return (
    <Center w={"100%"} h={"100vh"} {...props}>
      {children}
    </Center>
  );
};

export default Frame;
