# 🧪 Pigment CSS - Proof of Concept

This repository demonstrates a **Proof of Concept (PoC)** for integrating **Pigment CSS (alpha)** with **Storybook** in a React project. The PoC showcases:

- **Props-based styling**: Dynamically change a React component's styling based on its props.
- **Custom theming**: Create and apply themes using Pigment CSS to define colors, typography, and other design tokens.
- **Color schemes**: Implement multiple color schemes to show how global styles can adapt based on a selected theme or scheme.

## Features

1. **React Component with Dynamic Styling**  
  Includes a `Button` component styled dynamically based on props such as `variant` (e.g., primary, secondary) and integrates with the Pigment theme for consistent styling.

2. **Theming with Pigment CSS**  
  Demonstrates how to define a custom theme in Pigment CSS and apply it globally across components.

3. **Color Schemes**  
  Illustrates how to implement and switch between different color schemes within the same theme, providing flexibility for design systems.

4. **Storybook Integration**  
  Configures Storybook to showcase components styled with Pigment CSS and use the defined theme and color schemes consistently.

## Getting Started

To get started with this PoC, follow these steps:

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Run Storybook**:
    ```bash
    npm run storybook
    ```

3. **Explore the components**:
    Open your browser and navigate to the Storybook URL provided in the terminal to explore the components styled with Pigment CSS.

## Next

- Check multiple theme support
- Check `useTheme` support
- Understand library build

## References

- [[pigment-css] Why a standalone project?](https://mui-org.notion.site/pigment-css-Why-a-standalone-project-25205c31c8564e0daee6f79523de9b5c#864e39e82c184d2db64d67ba5f0c94f7)
- [🧪 Pigment CSS](https://github.com/mui/pigment-css?tab=readme-ov-file#media-and-container-queries)