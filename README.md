# svg-to-react

Convert SVG files into reusable, typed React components with ease.  
This tool wraps SVG elements in a custom `withSvg` HOC, enabling flexible `size`, `color`, and `className` support — ideal for icons exported from Figma or similar tools.

A simple and scalable tool to convert SVG files into reusable, typed React components using a custom `withSvg` wrapper.

Ideal for turning Figma-exported icons into flexible, theme-ready React components.



---

## 📁 Folder Structure

svg-to-react/
├── dist/ # Output directory (auto-generated)
│ └── components/icons/ # Generated .tsx icon components
├── src/
│ ├── icons-svg/ # Your raw .svg icon files
│ └── shared/
│ ├── functions/ # Utility functions for generation
│ └── hoc/
│ └── withSvg.tsx # React HOC wrapper
├── main.ts # Script entry point
├── tsconfig.json
├── README.md


---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install

```

### 2. Add SVG files
Place your .svg files into the src/icons-svg/ folder.

### 3. Generate React components
```
npx ts-node main.ts
```

This will:

Clean dist/components/icons/

Convert SVGs to React components

Create a barrel index.ts for easy imports

## 🧑‍💻 Usage Example

```
import { Add01 } from "@/components/icons"

export default function App() {
  return (
    <Add01 size={24} color="blue" className="hover:scale-110" />
  )
}

```

## 🛠 Customization

You can customize the behavior of all generated icon components by editing:

`src/shared/hoc/withSvg.tsx`

For example, you can:

- Add `role="img"` or `aria-hidden` for accessibility
- Add extra props like `strokeWidth`, `fill`, or `title`
- Control SVG rendering logic (e.g., default `viewBox`, styles, etc.)

