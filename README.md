# 💡 Lightbulb

<a href="https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb">
    <img src="assets/showcase-2.png" width="1600px"/>
</a>

<br/>

[Install from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb)

## Concept

Lightbulb is a minimal dark theme for Visual Studio Code that intelligently illuminates items of interest, while elegantly fading away unnecessary distractions.

This is a comprehensive theme designed over many years of experimentation with my own VS Code setup, with the goal of a design that increases productivity but is also nice to just _look_ at. **Bright actions** on **subtle surfaces**, lit up by **intuitive colors**.

## Recommended Setup

Lightbulb is good to go upon install, but here's some recommended customizations to see its full potential.

### 1. Update VSCode settings:

```jsonc
"editor.fontFamily": "Hack Nerd Font Mono", // https://github.com/ryanoasis/nerd-fonts
"editor.fontSize": 13
"window.zoomLevel": 0.45,
"workbench.editor.wrapTabs": false
```

### 2. Hide the title bar:

Install the [Customize UI](https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui) extension and set:

```json
"customizeUI.activityBar": "regular",
"customizeUI.font.monospace": "Hack Nerd Font Mono",
"customizeUI.listRowHeight": 23,
"customizeUI.stylesheet": {
  ".gettingStartedContainer h1": "color: #cacfe0; font-size: 1.8rem !important; text-transform: lowercase;",
  ".monaco-workbench .part.editor > .content .gettingStartedContainer .description": "font-size: 1rem !important; text-transform: lowercase;",
  ".monaco-workbench .part.editor>.content .gettingStartedContainer h2": "font-size: 1rem !important; text-transform: lowercase;"
},
"customizeUI.titleBar": "inline"
```

### 3. Style indent-rainbow

Install the [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) extension and set:

```json
"indentRainbow.colors": [
  "rgba(141, 151, 170, 0.0)",
  "rgba(141, 151, 170, 0.035)"
],
"indentRainbow.errorColor": "#f98d7c29",
"indentRainbow.indicatorStyle": "classic"
```

### 4. Style Subtle Match Brackets

Install the [Subtle Match Brackets](https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets) extensions and set:

```json
"subtleBrackets.style": {
  "borderColor": "#ffcf6f",
  "borderStyle": "none none solid none",
  "borderWidth": "1px"
},
```

### 5. Style TODOs

Install the [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) extension and set:

```json
"todohighlight.keywords": [
  {
    "backgroundColor": "#eff5ff",
    "overviewRulerColor": "#eff5ff",
    "text": "\r^[A-Z]+(?:_[A-Z]+)*$"
  },
  {
    "backgroundColor": "#CCCAC2",
    "color": "#121722",
    "overviewRulerColor": "#CCCAC2",
    "text": "TODO"
  },
  {
    "backgroundColor": "#ffcf6f",
    "color": "#121722",
    "overviewRulerColor": "#ffcf6f",
    "text": "IDEA"
  }
],
```

## Extras

Lightbulb also styles the following extensions (if installed):

- [Numbered Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.numbered-bookmarks)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Missing colors?

Can't get em all, report missing styles by [creating an issue](https://github.com/ykray/Lightbulb/issues).

Feel free to suggest styling changes by [submitting an idea](https://github.com/ykray/Lightbulb/discussions/categories/ideas).

---

Inspired by _Ayu Mirage_ and _Field Lights_.
