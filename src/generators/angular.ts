import * as fs from "fs"
import * as path from "path"
import { extractSvgContent, camelizeSvgAttributes, toPascalCase } from "../shared"

export function generateAngularIcons(inputDir: string, destDir: string) {
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

    const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".svg"))

    for (const file of files) {
        const baseName = file.replace(".svg", "")
        const className = toPascalCase(baseName)
        const selector = `icon-${baseName.toLowerCase()}`
        const svgInner = camelizeSvgAttributes(extractSvgContent(
            fs.readFileSync(path.join(inputDir, file), "utf-8")
        ))

        const componentDir = path.join(destDir, baseName)
        if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir)

        // component.ts
        const tsCode = `import { Component, Input } from '@angular/core';

@Component({
  selector: '${selector}',
  templateUrl: './${baseName}.component.html',
  standalone: true
})
export class ${className}Component {
  @Input() size: number = 24
  @Input() color: string = 'currentColor'
  @Input() strokeWidth: number = 1.5
  @Input() fill: string = 'none'
  @Input() title?: string
  @Input() ariaHidden: boolean = false
  @Input() role: string = 'img'
}
`

        // component.html
        const html = `<svg
  xmlns="http://www.w3.org/2000/svg"
  [attr.width]="size"
  [attr.height]="size"
  [attr.stroke]="color"
  [attr.stroke-width]="strokeWidth"
  [attr.fill]="fill"
  [attr.role]="ariaHidden ? 'presentation' : role"
  [attr.aria-hidden]="ariaHidden"
  viewBox="0 0 24 24"
>
  <title *ngIf="title">{{ title }}</title>
  ${svgInner}
</svg>
`

        fs.writeFileSync(path.join(componentDir, `${baseName}.component.ts`), tsCode)
        fs.writeFileSync(path.join(componentDir, `${baseName}.component.html`), html)
    }

    console.log("✅ Angular components generated!")
}
