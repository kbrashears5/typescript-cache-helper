<h1 align="center">typescript-cache-helper</h1>

<div align="center">
    
[![Build Status](https://dev.azure.com/kbrashears5/github/_apis/build/status/kbrashears5.typescript-cache-helper?branchName=master)](https://dev.azure.com/kbrashears5/github/_build/latest?definitionId=24&branchName=master)
[![Tests](https://img.shields.io/azure-devops/tests/kbrashears5/github/24)](https://img.shields.io/azure-devops/tests/kbrashears5/github/24)
[![Code Coverage](https://img.shields.io/azure-devops/coverage/kbrashears5/github/24)](https://img.shields.io/azure-devops/coverage/kbrashears5/github/24)

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