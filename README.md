# 💡 Lightbulb

<a href="https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb">
    <img src="images/showcase-4.jpg" width="1600px"/>
</a>

<br/>

## Philosophy

**Bright actions** on **subtle surfaces**, lit up by an **intuitive palette** of colors.

Lightbulb is a minimal dark theme for Visual Studio Code that intelligently illuminates items of interest, while elegantly fading away unnecessary distractions.

This is a comprehensive theme designed over many years of experimentation with my own VS Code setup, with the goal of a design that increases productivity (but is also nice to just stare at).

[Install Lightbulb](https://marketplace.visualstudio.com/items?itemName=ykray.lightbulb)

---

## Setup (recommended)

Lightbulb is good to go upon install, but here are some recommended customizations (from your end) to make it _really_ pop.

### Install [Helium Icons](https://marketplace.visualstudio.com/items?itemName=helgardrichard.helium-icon-theme) (pair nicely with Lightbulb)

### Install [JetBrains Mono](https://www.jetbrains.com/lp/mono/) and set:

```jsonc
{
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
  "editor.fontSize": 13,
  "editor.fontWeight": 400
}
```

### Install [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) and set:

```json
{
  "better-comments.tags": [
    {
      "backgroundColor": "transparent",
      "bold": false,
      "color": "#f98d7c",
      "italic": false,
      "strikethrough": false,
      "tag": "!",
      "underline": false
    },
    {
      "backgroundColor": "transparent",
      "bold": false,
      "color": "#ded9b4",
      "italic": false,
      "strikethrough": false,
      "tag": "?",
      "underline": false
    },
    {
      "backgroundColor": "transparent",
      "bold": true,
      "color": "#95a2b8",
      "italic": false,
      "strikethrough": false,
      "tag": "*",
      "underline": false
    }
  ]
}
```

### Install [Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) and set:

```json
{
  "indentRainbow.colors": [
    "rgba(141, 151, 170, 0.0)",
    "rgba(141, 151, 170, 0.035)"
  ],
  "indentRainbow.errorColor": "#f98d7c29",
  "indentRainbow.indicatorStyle": "classic"
}
```

### Install [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) and set:

```json
{
  "todohighlight.defaultStyle": {
    "backgroundColor": "transparent",
    "color": "#121722",
    "fontStyle": "",
    "fontWeight": "normal",
    "isWholeLine": true,
    "overviewRulerColor": "#ffcf6f"
  },
  "todohighlight.keywords": [
    {
      "backgroundColor": "#ffcf6f",
      "fontWeight": "bold",
      "text": "TODO"
    }
  ]
}
```

### Install [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) and set:

```json
{
  "coverage-gutters.partialHighlightDark": "#ffeca020",
  "coverage-gutters.highlightdark": "#42f1b420",
  "coverage-gutters.noHighlightDark": "#f98d7c29"
}
```

> **Note:**
> To change the gutter colors, edit the `fill` of the corresponding SVGs used by the extension (located at: `~/.vscode/extensions/ryanluker.vscode-coverage-gutters-2.10.4/app_images`)

---

## Extras

Built-in support for semantic highlighting, as well as styling for the following extensions:

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Numbered Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.numbered-bookmarks)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Inline Parameters](https://marketplace.visualstudio.com/items?itemName=liamhammett.inline-parameters)

---

## Missing colors?

> Report missing styles — [create an issue](https://github.com/ykray/Lightbulb/issues)

> Suggest changes — [submit an idea](https://github.com/ykray/Lightbulb/discussions/categories/ideas)

---

Inspired by _Ayu Mirage_ and _Field Lights_
