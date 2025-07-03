import * as fs from "fs"
import * as path from "path"
import { toPascalCase, extractSvgContent, camelizeSvgAttributes, generateComponent } from "../shared"

export function generateSvelteIcons(inputDir: string, destDir: string) {
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

    const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".svg"))

    for (const file of files) {
        const name = toPascalCase(file.replace(".svg", ""))
        const raw = fs.readFileSync(path.join(inputDir, file), "utf-8")
        const svgInner = camelizeSvgAttributes(extractSvgContent(raw))

        const component = `<script lang="ts">
  export let size: number = 24
  export let color: string = "currentColor"
  export let strokeWidth: number = 1.5
  export let fill: string = "none"
  export let title: string | undefined
  export let ariaHidden: boolean = false
  export let role: string = ariaHidden ? "presentation" : "img"
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={fill}
  stroke={color}
  stroke-width={strokeWidth}
  role={role}
  aria-hidden={ariaHidden}
  viewBox="0 0 24 24"
>
  {#if title}<title>{title}</title>{/if}
  ${svgInner}
</svg>
`

        const outPath = path.join(destDir, `${name}.svelte`)
        fs.writeFileSync(outPath, component)
    }

    console.log("✅ Svelte icons generated!")
}
