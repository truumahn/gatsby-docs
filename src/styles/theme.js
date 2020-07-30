import { lightTheme, darkTheme } from '../../theme';

function Theme({
  themeName,
  bodyBackgroundColor,
  bodyTextColor,
  bodyTextEmphColor,
  buttonTextColor,
  buttonBackgroundColor,
  buttonActiveTextColor = buttonTextColor,
  buttonActiveBackgroundColor,
  headerBackgroundColor,
  headerBorderColor = bodyTextEmphColor,
  sidebarBackgroundColor = headerBackgroundColor,
  sidebarBorderColor = headerBorderColor,
  anchorColor = buttonBackgroundColor,
  anchorActiveColor = buttonActiveBackgroundColor,
  errorColor,
  warnColor,
  successColor,
  infoColor,
  tableBackgroundColor,
  tableBorderColor,
}) {
  this.themeName = themeName;
  this.bodyBackgroundColor = bodyBackgroundColor;
  this.bodyTextColor = bodyTextColor;
  this.bodyTextEmphColor = bodyTextEmphColor;
  this.buttonTextColor = buttonTextColor;
  this.buttonBackgroundColor = buttonBackgroundColor;
  this.buttonActiveTextColor = buttonActiveTextColor;
  this.buttonActiveBackgroundColor = buttonActiveBackgroundColor;
  this.headerBackgroundColor = headerBackgroundColor;
  this.headerBorderColor = headerBorderColor;
  this.sidebarBackgroundColor = sidebarBackgroundColor;
  this.sidebarBorderColor = sidebarBorderColor;
  this.anchorColor = anchorColor;
  this.anchorActiveColor = anchorActiveColor;
  this.errorColor = errorColor;
  this.warnColor = warnColor;
  this.successColor = successColor;
  this.infoColor = infoColor;
  this.tableBackgroundColor = tableBackgroundColor;
  this.tableBorderColor = tableBorderColor;
}

lightTheme.themeName = 'light';
module.exports.lightTheme = new Theme(lightTheme);
darkTheme.themeName = 'dark';
module.exports.darkTheme = new Theme(darkTheme);
