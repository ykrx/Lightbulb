# 💡 Lightbulb

<a href="https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb">
    <img src="assets/showcase-2.png" width="1600px"/>
</a>

<br/>

[Install from the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb)

## Concept

Lightbulb is a minimal dark theme for Visual Studio Code that intelligently illuminates items of interest, while elegantly fading away unnecessary distractions.

This is a comprehensive theme designed over many years of experimentation with my own VS Code setup, with the goal of a design that increases productivity but is also nice to just _look_ at. **Bright actions** on **subtle surfaces**, lit up by **intuitive colors**.

## Setup (recommended)

Lightbulb is good to go upon install, but here's some recommended customizations to see its full potential.

### 💡 [Helium Icons](https://marketplace.visualstudio.com/items?itemName=helgardrichard.helium-icon-theme) look great with Lightbulb!

### 💡 Update VSCode settings:

```jsonc
"editor.fontFamily": "JetBrains Mono", // https://www.jetbrains.com/lp/mono/
"editor.fontSize": 13
"window.zoomLevel": 0.45,
"workbench.editor.wrapTabs": false
```

### 💡 Style indent-rainbow

Install the [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) extension and set:

```json
"indentRainbow.colors": [
  "rgba(141, 151, 170, 0.0)",
  "rgba(141, 151, 170, 0.035)"
],
"indentRainbow.errorColor": "#f98d7c29",
"indentRainbow.indicatorStyle": "classic"
```

### 💡 Style Subtle Match Brackets

Install the [Subtle Match Brackets](https://marketplace.visualstudio.com/items?itemName=rafamel.subtle-brackets) extensions and set:

```json
"subtleBrackets.style": {
  "borderColor": "#ffcf6f",
  "borderStyle": "none none solid none",
  "borderWidth": "1px"
},
```

### 💡 Style TODOs

Install the [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) extension and set:

```json
"todohighlight.defaultStyle": {
  "backgroundColor": "transparent",
  "color": "#121722",
  "fontStyle": "",
  "fontWeight": "bold",
  "isWholeLine": true,
  "overviewRulerColor": "#ffcf6f"
},
"todohighlight.keywords": [
  {
    "backgroundColor": "#ffcf6f",
    "color": "#121722",
    "overviewRulerColor": "#ffcf6f",
    "text": "TODO"
  }
],
```

## Extras

Your new favorite theme is [now on Firefox!](https://addons.mozilla.org/en-US/firefox/addon/lightbulb-theme/)

Lightbulb also automatically styles the following extensions (if installed):

- [Numbered Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.numbered-bookmarks)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Missing colors?

Can't get em all, report missing styles by [creating an issue](https://github.com/ykray/Lightbulb/issues).

Feel free to suggest styling changes by [submitting an idea](https://github.com/ykray/Lightbulb/discussions/categories/ideas).

---

Inspired by _Ayu Mirage_ and _Field Lights_.
