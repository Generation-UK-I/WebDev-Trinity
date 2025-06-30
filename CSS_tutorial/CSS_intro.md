# Introduction to CSS

CSS (Cascading Style Sheets) is used to style and layout HTML content. It controls the colors, fonts, spacing, and positioning of elements on a web page.

This guide introduces CSS basics with examples that you can modify and test in your own HTML files.

### How to Add CSS

CSS can be added in three main ways:

- **Inline** - Add the `style` attribute directly to an HTML element.

```html
<p style="color: blue;">This is a blue paragraph.</p>
```

- **Internal** - Use a `<style>` block inside the `<head>` of your HTML file.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>This paragraph is green.</p>
</body>
</html>
```

- **External** - Link to a separate *.css* file using a `<link>` tag.

HTML file:
```html
<!-- In HTML file -->
<link rel="stylesheet" href="styles.css">
```
CSS file:
```css
/* In styles.css */
p {
  color: red;
}
```

### Selectors and Properties

A CSS rule targets elements using selectors and applies properties with values.

```css
h1 {
  color: darkblue;
  font-size: 32px;
}
```

### Classes and IDs

Use classes to style groups of elements, and IDs to style a specific element.

HTML file:
```html
<p class="note">This is a note.</p>
<p id="highlight">This is highlighted.</p>
```
CSS file:
```css
.note {
  font-style: italic;
  color: gray;
}

#highlight {
  background-color: yellow;
}
```

### Colors

CSS supports named colors, hex codes, RGB, and HSL.

```css
body {
  background-color: #f0f0f0;
}

h1 {
  color: rgb(255, 0, 0); /* red */
}

p {
  color: hsl(240, 100%, 50%); /* blue */
}
```

### Fonts and Text

CSS can change font size, typeface, alignment, and spacing.

```css
p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  text-align: center;
  letter-spacing: 1px;
}
```

### Box Model (Padding, Margin, Border)

Every HTML element is a box with `padding`, `border`, and `margin`.

```css
div {
  border: 2px solid black;
  padding: 20px;
  margin: 10px;
}
```

### Backgrounds

You can style the background of any element with a color or image.

```css
body {
  background-color: #e6f7ff;
}

div {
  background-image: url('https://via.placeholder.com/150');
  background-repeat: no-repeat;
  background-size: cover;
}
```

### Layout: Display, Width, and Height

Control element layout using `display`, `width`, and `height`.

```css
.box {
  width: 200px;
  height: 100px;
  display: inline-block;
  background-color: lightgreen;
}
```

### Hover Effects

Use `:hover` to apply styles when the user hovers over an element.

```css
button:hover {
  background-color: darkblue;
  color: white;
}
```

## Flexbox

Flexbox (Flexible Box Layout) makes it easy to create layouts where elements automatically adjust their size and position, especially useful for navigation bars, cards, and responsive layouts.

To use Flexbox, apply `display: flex;` to a container. The items inside will automatically become flex items.

HTML file:
```html
<div class="flex-container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
```
CSS file:
```css
.flex-container {
  display: flex;
  gap: 10px;
}

.box {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
  flex: 1;
}
```

Try adjusting the `gap`, `padding`, and `flex` values to see how space changes (resize your browser window to see the effect).

### Main Axis Alignment

You can align items horizontally using `justify-content`:

```css
.flex-container {
  display: flex;
  justify-content: space-between; /* or center, flex-start, flex-end, space-around */
}
```

### Cross Axis Alignment

Align items vertically using `align-items`:

```css
.flex-container {
  display: flex;
  align-items: center; /* or flex-start, flex-end, stretch */
  height: 200px;
  border: 1px solid gray;
}
```

### Flex Direction

Flexbox defaults to a horizontal layout. You can switch to vertical using `flex-direction`.

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

### Wrapping Flex Items

By default, Flexbox items try to stay on one line. Enable wrapping with `flex-wrap`.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
```

