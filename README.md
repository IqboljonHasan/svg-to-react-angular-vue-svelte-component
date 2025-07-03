# svg-to-react-vue-angular-svelte-component

Convert your SVG icons (e.g. from Figma) into reusable components for **React**, **Vue**, **Svelte**, and **Angular** — all with proper props, accessibility support, and TypeScript.

---

## ✨ Features

- 🧠 Framework-agnostic SVG parser
- ⚛️ React components using a custom `withSvg` HOC
- 🔥 Vue 3 `<script setup>` SFCs
- 🟠 Svelte components with full reactivity
- 🅰️ Angular standalone components
- 🎨 All icons support `size`, `color`, `strokeWidth`, `fill`, `title`, `aria-hidden`, `role`
- 🧹 Cleans output directories before generation
- 📦 Outputs tree-shakable files with named exports

---

## 🚀 Usage

### 1. Install

```bash
npm install
```

### 2. Add your `.svg` icons

Put them in:  
```
src/icons-svg/
```

---

### 3. Run Generators

```bash
npm run generate:react
npm run generate:vue
npm run generate:svelte
npm run generate:angular
npm run generate:all   # To generate all at once
```

---

## 📦 Import Examples

### ✅ React

```tsx
import { AddIcon } from "@/components/icons"
<AddIcon size={24} color="blue" title="Add" />
```

### ✅ Vue

```vue
<AddIcon size="32" color="red" title="Add item" />
```

### ✅ Svelte

```svelte
<AddIcon size={20} color="green" title="Submit" />
```

### ✅ Angular

```html
<icon-add [size]="28" color="purple" [title]="'Delete'" />
```

---

## 💡 Icon Props (All Frameworks)

| Prop         | Type             | Description                              |
|--------------|------------------|------------------------------------------|
| `size`       | `number`         | Icon size in pixels                      |
| `color`      | `string`         | Stroke color (`currentColor` default)    |
| `strokeWidth`| `number`         | Stroke width (default: `1.5`)            |
| `fill`       | `string`         | Fill color (`none` default)              |
| `title`      | `string`         | Accessible label (renders `<title>`)     |
| `ariaHidden` | `boolean`        | Whether to hide from screen readers      |
| `role`       | `string`         | Accessibility role (`img`, `presentation`) |

---

## 📜 Scripts

```json
"scripts": {
  "generate:react": "ts-node src/main.ts react",
  "generate:vue": "ts-node src/main.ts vue",
  "generate:svelte": "ts-node src/main.ts svelte",
  "generate:angular": "ts-node src/main.ts angular",
  "generate:all": "npm run generate:react && npm run generate:vue && npm run generate:svelte && npm run generate:angular"
}
```

---

## 📃 License

MIT

---

## 🙌 Credits

Built with ❤️ to streamline icon usage across modern frontend frameworks.
