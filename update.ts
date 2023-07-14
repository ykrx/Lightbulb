const fs = require('fs');
const path = require('path');

// Path to your theme file
const themeFilePath = './themes/Lightbulb-color-theme.json';

// Path to your VSCode settings file
const settingsFilePath = '/path/to/your/settings.json';

// Read the settings file
const settings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf8'));

// Extract the tokenColors and colors objects
const { tokenColors, colors } = settings['editor.tokenColorCustomizations'];

// Read the theme file
const theme = JSON.parse(fs.readFileSync(themeFilePath, 'utf8'));

// Update the theme file with the extracted objects
theme.tokenColors = tokenColors;
theme.colors = colors;

// Write the updated theme file
fs.writeFileSync(themeFilePath, JSON.stringify(theme, null, 2));

console.log('Theme updated successfully!');
