import { ChakraProvider } from "@chakra-ui/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'gray',
        value: '#999',
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS>
      <Story />
    </ChakraProvider>
  ),
];
