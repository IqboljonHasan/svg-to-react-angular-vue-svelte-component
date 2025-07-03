import * as fs from "fs"
import * as path from "path"
import { toPascalCase, extractSvgContent, camelizeSvgAttributes, generateComponent } from "../shared"

export function generateVueIcons(inputDir: string, destDir: string) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".svg"))

  for (const file of files) {
    const name = toPascalCase(file.replace(".svg", ""))
    const raw = fs.readFileSync(path.join(inputDir, file), "utf-8")
    const svgInner = camelizeSvgAttributes(extractSvgContent(raw))

    const component = `<script setup lang="ts">
defineProps<{
  size?: number
  color?: string
  strokeWidth?: number
  fill?: string
  title?: string
  ariaHidden?: boolean
  role?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size || 24"
    :height="size || 24"
    :stroke="color || 'currentColor'"
    :stroke-width="strokeWidth || 1.5"
    :fill="fill || 'none'"
    :role="role || (ariaHidden ? 'presentation' : 'img')"
    :aria-hidden="ariaHidden ?? false"
    viewBox="0 0 24 24"
  >
    <title v-if="title">{{ title }}</title>
    ${svgInner}
  </svg>
</template>
`

    const outPath = path.join(destDir, `${name}.vue`)
    fs.writeFileSync(outPath, component)
  }

  console.log("✅ Vue components generated!")
}

