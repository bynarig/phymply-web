Phymply School Website

This repository contains the source code for the Phymply school website, built with React, TypeScript, and modern web technologies.

## Technologies Used

- **React** - Frontend library for building user interfaces
- **TypeScript** - Strongly typed programming language that builds on JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - React framework for server-side rendering and static site generation
- **pnpm** - Package manager for JavaScript

## Project Structure

```
src/
├── app/             # Next.js app pages and routing
├── components/      # Reusable UI components
│   ├── ui/          # Basic UI elements (Logo, Navbar, etc.)
│   └── shared/      # Shared components used across features
├── widgets/         # Larger composite components representing sections/features
│   └── about/       # Components related to the About section
├── styles/          # Global styles and theme configuration
├── utils/           # Utility functions and helpers
└── types/           # TypeScript type definitions
```

### Structure Philosophy

- **Component-Based Architecture**: The project is organized around reusable components
- **Feature-Based Organization**: Widgets are grouped by feature/section
- **Separation of Concerns**: UI components are separated from business logic
- **Scalability**: Structure supports growth without becoming unwieldy

## Getting Started

0. **Install package manager:**
   ```bash
   npm install -g pnpm
   ```

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/phymply-website.git
   cd phymply-website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run development server:**
   ```bash
   pnpm run dev
   ```

4. **Open your browser:**
   Navigate to http://localhost:3000

## How to Contribute

1. **Fork the repository**
   
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit:**
   ```bash
   git commit -m "Add a descriptive commit message"
   ```

4. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request:**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and the branch with your changes
   - Add a description of your changes
   - Submit the Pull Request

## Coding Guidelines

- Follow the existing code style and naming conventions
- Use TypeScript types for all components and functions
- Write meaningful component and variable names
- Keep components small and focused on a single responsibility
- Add comments for complex logic
- Make sure all components are accessible

## Build for Production

```bash
pnpm run build
pnpm run start
```

## License

MIT License
