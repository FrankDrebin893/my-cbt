import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../components/styled/SharedCss';
import { Snackbar, SnackbarProps } from '../components/feedback/Snackbar';

export default {
  title: 'Example/Feedback',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) =>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Snackbar {...args} />
  </ThemeProvider>;

export const Exercise = Template.bind({});
Exercise.args = {
    message: "This is a test snackbar",
    open: true,
    style: 'Info'
};
