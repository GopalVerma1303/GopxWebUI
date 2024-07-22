## Contributing

We welcome contributions to this project! Please follow these guidelines to ensure a smooth collaboration process.

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/GopalVerma1303/webui.gopx.git`
3. Install dependencies: `pnpm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

### Development Workflow

1. Make your changes in the appropriate directories:
   - For website changes, work in the `apps/website` directory
   - For shared UI components, use the `packages/ui` directory
   - For configuration changes, modify the relevant package in `packages/`

2. Follow the coding standards:
   - Use TypeScript for type safety
   - Follow the ESLint rules defined in `packages/config-eslint`
   - Use Tailwind CSS for styling, following the configuration in `packages/config-tailwind`

3. Test your changes:
   - Run `pnpm dev` to start the development server
   - Ensure your changes work as expected
   - Add or update tests if necessary

4. Commit your changes:
   - Use clear and concise commit messages
   - Reference any relevant issues in your commits

5. Push your changes to your fork: `git push origin feature/your-feature-name`

6. Open a pull request:
   - Provide a clear title and description of your changes
   - Link any related issues
   - Ensure all checks pass

### Code Review Process

1. A maintainer will review your pull request
2. Address any feedback or requested changes
3. Once approved, your changes will be merged

### Reporting Issues

- Use the GitHub Issues tab to report bugs or suggest enhancements
- Provide a clear title and description
- Include steps to reproduce for bugs
- Add relevant labels

### Documentation

- Update the README.md if you make changes that affect the project setup or usage
- Document new features or significant changes in the appropriate places

### Monorepo Guidelines

- Respect the monorepo structure
- Use `pnpm` for package management
- Update `turbo.json` if you add new packages or change build processes

Thank you for contributing to our project!
