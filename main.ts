// generate-icons.ts
import * as fs from "fs"
import * as path from "path"
import { toPascalCase, extractSvgContent, camelizeSvgAttributes, generateComponent } from "./src/shared"

const SVG_DIR = "src/icons-svg"
const OUTPUT_DIR = "dist/components/icons"


function main() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true })

    const withSvgSource = path.resolve("src/shared/hoc/withSvg.tsx")
    const withSvgTarget = path.resolve("dist/components/icons/withSvg.tsx")

    if (!fs.existsSync(withSvgTarget)) {
        fs.copyFileSync(withSvgSource, withSvgTarget)
    }
    const files = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith(".svg"))
    const exports: string[] = []

    for (const file of files) {
        const baseName = path.basename(file)
        const componentName = toPascalCase(baseName)
        const svgRaw = fs.readFileSync(path.join(SVG_DIR, file), "utf-8")
        const svgInner = camelizeSvgAttributes(extractSvgContent(svgRaw))

        const componentCode = generateComponent(componentName, svgInner)
        const outPath = path.join(OUTPUT_DIR, `${componentName}.tsx`)
        fs.writeFileSync(outPath, componentCode)
        exports.push(`export { ${componentName} } from "./${componentName}"`)
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, "index.ts"), exports.join("\n") + "\n")
    console.log("✅ Icons generated!")
}

main()
