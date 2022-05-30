import React, { PropsWithChildren, ReactElement } from "react";
import {
  AspectRatio,
  Image,
  Flex,
  FlexProps,
  Text,
  Box,
} from "@chakra-ui/react";

export type ResourceCardProps = FlexProps & {
  imageSrc: string;
  imageAltText?: string;
  breadcrumbText?: string;
  title: string;
  body: string;
  badgeText?: string;
  badgeColour?: string;
  badgeTextColour?: string;
};

const ResourceCard = ({
  imageSrc,
  imageAltText,
  body,
  title,
  breadcrumbText,
  badgeText,
  badgeColour = "black",
  badgeTextColour = "white",
  ...props
}: PropsWithChildren<ResourceCardProps>): ReactElement => {
  return (
    <Flex flexDir={"column"} {...props}>
      <Box position={"relative"}>
        <AspectRatio ratio={4 / 3}>
          <Image src={imageSrc} alt={imageAltText} objectFit="cover" />
        </AspectRatio>
        {/*@TODO: Potentially extract this badge as standalone component.*/}
        {/*@TODO: When styling this up, alter `right` and `top` to offset from top corner.*/}
        {!!badgeText && (
          <Box bg={badgeColour} position={"absolute"} right={0} top={0}>
            <Text as="h5" textStyle="b1" color={badgeTextColour}>
              {badgeText}
            </Text>
          </Box>
        )}
      </Box>
      <Text as="h4" textStyle="b1" color="black">
        {breadcrumbText}
      </Text>
      <Text as="h4" textStyle="b1" color="black">
        {title}
      </Text>
      <Text as="h4" textStyle="b1" color="black">
        {body}
      </Text>
    </Flex>
  );
};

export default ResourceCard;
