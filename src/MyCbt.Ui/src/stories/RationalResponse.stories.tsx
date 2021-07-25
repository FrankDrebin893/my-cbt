import React from 'react';
import { RationalResponseExercise, RationalResponseProps } from '../containers/RationalResponseExercise';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme/StyledComponentsTheme';
import { GlobalStyle } from '../components/styled/SharedCss';

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
  Responses: [{ response: "This is a response", statement: "This is a statement" },
  { response: "This is a second response", statement: "This is a second statement" },
  { response: "This is a third response", statement: "This is a third statement" },
  { response: "This is a fourth response", statement: "This is a fourth statement" }]
};
