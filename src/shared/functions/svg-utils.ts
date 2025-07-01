/**
 * Extracts the inner content of an SVG string (everything between <svg> tags)
 * @param svg - The SVG string
 * @returns The inner SVG content
 */
export function extractSvgContent(svg: string): string {
    const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)
    return match ? match[1].trim() : ""
}

/**
 * Converts SVG attributes to React camelCase format and forces currentColor for stroke
 * @param svg - The SVG string to process
 * @returns The processed SVG string with camelCase attributes
 */
export function camelizeSvgAttributes(svg: string): string {
    return svg
        .replace(/stroke-width/g, "strokeWidth")
        .replace(/stroke-linecap/g, "strokeLinecap")
        .replace(/stroke-linejoin/g, "strokeLinejoin")
        .replace(/fill-rule/g, "fillRule")
        .replace(/clip-rule/g, "clipRule")
        .replace(/stroke=".*?"/g, 'stroke="currentColor"') // ← force currentColor
}
