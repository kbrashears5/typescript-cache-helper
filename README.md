<h1 align="center">typescript-cache-helper</h1>

<div align="center">
    
[![CI/CD](https://github.com/kbrashears5/typescript-cache-helper/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kbrashears5/typescript-cache-helper/actions/workflows/ci-cd.yml)
[![codecov](https://codecov.io/gh/kbrashears5/typescript-cache-helper/branch/master/graph/badge.svg?token=QDX7Z7TDN4)](https://codecov.io/gh/kbrashears5/typescript-cache-helper)
[![npm](https://img.shields.io/npm/v/typescript-cache-helper)](https://img.shields.io/npm/v/typescript-cache-helper)
[![Downloads](https://img.shields.io/npm/dt/typescript-cache-helper)](https://img.shields.io/npm/dt/typescript-cache-helper)

</div>

## Installation

```
npm i typescript-cache-helper@latest -g
```

## Usage

```typescript
const cacheHelper = new CacheHelper(['cache-name'], 300);

cacheHelper.Add('cache-name', 'key', { 'key', 'value' });
```

## Development

Clone the latest and run

```npm
npm run prep
```

to install packages and prep the git hooks
