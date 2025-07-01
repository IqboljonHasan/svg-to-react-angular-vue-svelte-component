/**
 * Converts a string to PascalCase and removes .svg extension
 * @param str - The string to convert
 * @returns The PascalCase string
 */
export function toPascalCase(str: string): string {
    return str
        .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())
        .replace(/\.svg$/, "")
}
