import * as fs from "fs"
import * as path from "path"
import { toPascalCase, extractSvgContent, camelizeSvgAttributes, generateComponent } from "../../src/shared"

export function generateReactIcons(inputDir: string, destDir: string) {
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

    const withSvgSource = path.resolve("src/shared/hoc/withSvg.tsx")
    const withSvgTarget = path.resolve(destDir, "withSvg.tsx")

    if (!fs.existsSync(withSvgTarget)) {
        fs.copyFileSync(withSvgSource, withSvgTarget)
    }
    const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".svg"))
    const exports: string[] = []

    for (const file of files) {
        const baseName = path.basename(file)
        const componentName = toPascalCase(baseName)
        const svgRaw = fs.readFileSync(path.join(inputDir, file), "utf-8")
        const svgInner = camelizeSvgAttributes(extractSvgContent(svgRaw))

        const componentCode = generateComponent(componentName, svgInner)
        const outPath = path.join(destDir, `${componentName}.tsx`)
        fs.writeFileSync(outPath, componentCode)
        exports.push(`export { ${componentName} } from "./${componentName}"`)
    }

    fs.writeFileSync(path.join(destDir, "index.ts"), exports.join("\n") + "\n")
    console.log("✅ React Icons generated!")
}
