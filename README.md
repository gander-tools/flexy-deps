# 📦 flexy-deps

A flexible dependency management tool inspired by Symfony Flex, allowing you to easily add dependencies based on predefined recipes.

## 🔍 Overview

Flexy-deps simplifies the process of adding dependencies to your projects by providing a recipe-based approach. Instead of manually installing and configuring multiple packages, you can use flexy-deps to add common tool combinations with a single command.

## ✨ Key features:

- 🖥️ Interactive CLI for selecting dependencies
- 📝 Predefined recipes for common development tools
- 💡 Inspired by Symfony Flex's approach to dependency management
- ⚡ Streamlines the setup of development environments

## 🚀 Usage

```bash
npx flexy-deps
```

or:

```bash
bunx flexy-deps
```

## 🔧 Development

### Install

```shell
bun install
```

### Install git hook

```shell
bunx lefthook install
```

`~/.lefthookrc`:

```
PATH=$PATH:$HOME/.bun/bin
```

### Release

```shell
bun run release
```

