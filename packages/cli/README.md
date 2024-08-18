# gopx-webui CLI

Use the CLI to add GOPX WEBUI components to your project.

### Options

```bash
Usage: gopx-webui [options] [command]

add components and dependencies to your project

Options:
  -v, --version                  display the version number
  -h, --help                     display help for command

Commands:
  init [options]                 Initialize your project with shadcn-ui config & gopx-webui
  add [options] [components...]  Add ui components to your project
  diff [options] [component]     Check for updates against the registry
  help [command]                 display help for command
```

## init

Use the `init` command to initialize configuration and dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx gopx-webui@latest init
```

You will be asked a few questions to configure `components.json`:

```bash showLineNumbers
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Would you like to use CSS variables for colors? … no / yes
```

### shadcn-ui project?

If your project is already using the `shadcn-ui`, don't worry! You can still use `gopx-webui`.

Just add these line(s) to your `components.json` file:

```json filename="components.json" showLineNumbers {15}
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### Options

```bash
Usage: gopx-webui init [options]

Initialize your project with shadcn-ui config & gopx-webui

Options:
  -y, --yes        skip confirmation prompt. (default: false)
  -d, --defaults,  use default configuration. (default: false)
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -h, --help       display help for command
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required dependencies.

```bash
npx gopx-webui add [component]
```

### Usage

```bash
npx gopx-webui add bento-grid
```

You can use the optional `--all` flag to install all components:

```bash
npx gopx-webui add --all
```

You can use the optional `--example` flag to select and install example & demo you saw on website:

```bash
npx gopx-webui add --example
```

You will be presented with a list of components to choose from:

```bash
? Which components would you like to add? › Space to select. A to toggle all. Enter to submit.
◯   avatar-stack-demo
◯   copyable-input-demo
◯   ghost-label-demo
◯   gopx-accordion-demo
◯   gopx-dropdown-demo
◯   image-tooltip-demo
◯   infinite-carousel-demo
◯   text-tooltip-demo
◯   torsional-link-demo
```

You can use the optional `--block` flag to select and install blocks you saw on website:

```bash
npx gopx-webui add --block
```

You will be presented with a list of components to choose from:

```bash
? Which components would you like to add? › Space to select. A to toggle all. Enter to submit.
◯   gopx-faqs
◯   gopx-hero
◯   gopx-pricing
```

You can also run the command without any arguments to view a list of all available components:

```bash
npx gopx-webui add
```

You will be presented with a list of components to choose from:

```bash
? Which components would you like to add? › Space to select. A to toggle all. Enter to submit.
◯   accordion
◯   avatar-stack
◯   bento-grid
◯   bg-bricks
◯   bg-check
◯   bg-cross
◯   bg-dots
◯   bg-grid
◯   bg-matrix
◯ ↓ bg-nosignal
```

### Options

```bash
Usage: gopx-webui add [options] [components...]

Add ui components to your project

Arguments:
  components         the components to add

Options:
  -y, --yes          skip confirmation prompt. (default: true)
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -a, --all          add all available components (default: false)
  -e, --example      include available examples & demos (default: false)
  -b, --block        include available blocks (default: false)
  -s, --shadcn       include available components from shadcn-ui (default: false)
  -p, --path <path>  the path to add the component to.
  -h, --help         display help for command
```

## diff (experimental)

You can use the diff command to check for updates against the registry.

Run the following command to get a list of components that have updates available:

```bash
npx gopx-webui diff
```

```bash
The following components have updates available:
- alert
  - /path/to/my-app/components/ui/alert.tsx
- button
  - /path/to/my-app/components/ui/button.tsx
- toast
  - /path/to/my-app/components/ui/use-toast.ts
  - /path/to/my-app/components/ui/toaster.tsx
```

Then run `diff [component]` to see the changes:

```bash
const alertVariants = cva(
- "relative w-full rounded-lg border",
+ "relative w-full pl-12 rounded-lg border"
)
```

### Options

```bash
Usage: gopx-webui diff [options] [component]

Check for updates against the registry

Arguments:
  component        the component name

Options:
  -y, --yes        skip confirmation prompt. (default: false)
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -h, --help       display help for command
```
