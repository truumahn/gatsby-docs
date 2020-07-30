// Available variables:
// 
// bodyBackgroundColor
// bodyTextColor
// bodyTextEmphColor
// buttonTextColor
// buttonBackgroundColor
// buttonActiveTextColor
// buttonActiveBackgroundColor
// headerBackgroundColor
// headerBorderColor
// sidebarBackgroundColor
// sidebarBorderColor
// anchorColor
// anchorActiveColor
// errorColor
// warnColor
// successColor
// infoColor
// tableBackgroundColor
// tableBorderColor

// Accent colors
const primary = '#040257';
const secondary = '#5BD566';
const extra1 = '#003587';
const extra2 = '#0060A8';
const extra5 = '#4EDCC2';

// Gray colors
const white = '#FFFFFF';
const gray1 = '#ECEFF1';
const gray2 = '#CFD8DC';
const gray6 = '#607D8B';
const gray8 = '#455A64';
const gray9 = '#37474F';
const gray10 = '#263238';

// Utility colors
const error = '#E53935';
const warn = '#FDB049';
const success = '#00B974';
const info = '#0068D3';

module.exports.lightTheme = {
  bodyBackgroundColor: white,
  bodyTextColor: gray6,
  bodyTextEmphColor: gray9,
  buttonTextColor: white,
  buttonBackgroundColor: extra2,
  buttonActiveBackgroundColor: extra1,
  headerBackgroundColor: gray2,
  headerBorderColor: gray2,
  sidebarBackgroundColor: gray1,
  sidebarBorderColor: gray1,
  anchorColor: extra2,
  anchorActiveColor: primary,
  errorColor: error,
  warnColor: warn,
  successColor: success,
  infoColor: info,
};

module.exports.darkTheme = {
  bodyBackgroundColor: gray9,
  bodyTextColor: gray2,
  bodyTextEmphColor: gray1,
  buttonTextColor: white,
  buttonBackgroundColor: primary,
  buttonActiveBackgroundColor: extra1,
  headerBackgroundColor: gray8,
  headerBorderColor: gray8,
  sidebarBackgroundColor: gray10,
  sidebarBorderColor: gray10,
  anchorColor: extra5,
  anchorActiveColor: secondary,
  errorColor: error,
  warnColor: warn,
  successColor: success,
  infoColor: info,
};
