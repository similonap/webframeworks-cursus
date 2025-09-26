# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 2 based educational website for React.js and React Native courses. The repository contains:

- **Documentation site**: Built with Docusaurus 2, serving React.js and React Native course materials
- **CodeSandbox examples**: Interactive React examples in the `codesandbox/` directory
- **Course content**: Comprehensive course materials in `docs/` covering React fundamentals, Next.js, TypeScript, and React Native
- **Lab solutions**: Complete implementations in `src/components/LabSolutions/`

## Development Commands

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server (hot reload enabled)
npm start
# or
yarn start

# Build for production
npm run build
# or
yarn build

# Type checking
npm run typecheck
# or
tsc

# Serve production build locally
npm run serve
# or
yarn serve

# Clear Docusaurus cache
npm run clear
# or
yarn clear
```

## Architecture

### Directory Structure
- `docs/`: Course documentation and materials
  - `wf-course/`: React.js course content
  - `react-native-course/`: React Native course content
- `src/components/`: Reusable React components and lab solutions
- `codesandbox/`: Standalone React examples for CodeSandbox integration
- `static/`: Static assets including images and API mock data
- `plugins/`: Custom Docusaurus plugins for CodeSandbox and Expo integration

### Key Components
- **Custom Docusaurus plugins**: CodeSandbox and Expo integration for interactive examples
- **Lab Solutions**: Complete React component implementations demonstrating course concepts
- **Internationalization**: Configured for Dutch (nl-BE) locale
- **Custom themes**: Light/dark mode with custom CSS

### Content Organization
- Course materials are auto-generated into sidebars based on directory structure
- CodeSandbox examples provide hands-on practice environments
- Lab solutions serve as reference implementations for course exercises

## Working with Course Content

When editing course materials:
- Documentation is in Markdown with MDX support
- Images should be placed in appropriate `images/` subdirectories
- CodeSandbox examples should have their own `package.json` and be self-contained
- Lab solutions should follow existing naming conventions and include CSS modules where appropriate

## Code Conventions for React Course Documentation

### Component Declarations
All React components in course materials should use **normal function declarations**:

```typescript
// ✅ Correct
function ComponentName() {
  return <div>Content</div>;
}

function ComponentName(props: PropsType) {
  return <div>{props.data}</div>;
}

// ❌ Avoid
const ComponentName = () => {
  return <div>Content</div>;
};
```

### Event Handlers
Event handlers should use **arrow functions with React EventHandler types** on the const declaration:

```typescript
// ✅ Correct
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(event.target.value);
};

const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  console.log("button clicked");
};

// ❌ Avoid
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
```

### Other Function Declarations
Regular functions (non-components, non-event handlers) should use **normal function declarations**:

```typescript
// ✅ Correct
function addClicked(): void {
  // implementation
}

function removeNumber(i: number): void {
  // implementation
}

// ❌ Avoid
const addClicked = (): void => {
  // implementation
};
```

### TypeScript Conventions
- Always provide proper TypeScript types for component props
- Use interfaces for component props: `interface ComponentProps { ... }`
- Event handlers should use React's built-in event handler types
- Maintain consistent typing patterns throughout examples

## Deployment

The site is configured for GitHub Pages deployment to `similonap.github.io`. Use the deployment commands from the README for publishing updates.