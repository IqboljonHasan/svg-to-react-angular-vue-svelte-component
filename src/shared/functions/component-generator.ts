const withSvgImport = `import { withSvg } from "./withSvg"\n\n`

/**
 * Generates a React component string for an SVG icon
 * @param name - The component name
 * @param svgContent - The SVG content to wrap
 * @returns The complete component code string
 */
export function generateComponent(name: string, svgContent: string): string {
    return `${withSvgImport}export const ${name} = withSvg(\n  <>${svgContent
        .split("\n")
        .map((line) => `\n    ${line}`)
        .join("")}\n  </>\n)\n`
}
