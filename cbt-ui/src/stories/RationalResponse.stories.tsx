import React from 'react';
import { RationalResponseExercise, RationalResponseProps } from '../containers/RationalResponseExercise';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../components/styled/Lib';

export default {
  title: 'Example/RationalResponseExercise',
  component: RationalResponseExercise,
} as Meta;

const Template: Story<RationalResponseProps> = (args) =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RationalResponseExercise {...args} />
  </ThemeProvider>;

export const Exercise = Template.bind({});
Exercise.args = {
  Responses: [{ reply: "This is a response", statement: "This is a statement" },
  { reply: "This is a second response", statement: "This is a second statement" },
  { reply: "This is a third response", statement: "This is a third statement" },
  { reply: "This is a fourth response", statement: "This is a fourth statement" }]
};
