import type { IconTheme } from '../typescript/types.d.ts';
import path from 'node:path';

function config(files: string[], ...suffix: string[]) {
  const find = (...prefix: string[]) => {
    const search = [...prefix, ...suffix];

    for (let i = search.length; i > 0; i--) {
      const test = search.slice(0, i).join('-');

      if (files.find((file) => file.split('.')[0] === test)) return test;
    }

    return undefined;
  };

  return {
    file: find('file'),
    // folder: undefined,
    // folderExpanded: undefined,
    fileExtensions: {
      // binary
      'a': find('binary'),
      'so': find('binary'),
      'dylib': find('binary'),
      'wasm': find('binary'),
      'node': find('binary'),
      'class': find('binary'),
      'jar': find('binary'),
      'bson': find('binary'),

      // archive
      'zip': find('binary'),
      'xip': find('binary'),
      'tar': find('binary'),
      'xar': find('binary'),
      'gz': find('binary'),
      'xz': find('binary'),

      // image
      'png': find('image'),
      'jpg': find('image'),
      'jpeg': find('image'),
      'webp': find('image'),
      'heic': find('image'),
      'gif': find('image'),
      'bmp': find('image'),
      'tiff': find('image'),
      'tif': find('image'),
      'ico': find('image'),

      // audio
      'mp3': find('video'),
      'wav': find('video'),
      'm4a': find('video'),
      'aac': find('video'),

      // video
      'mp4': find('video'),
      'mov': find('video'),
      'm4v': find('video'),
      'webm': find('video'),

      // font
      'ttf': find('font'),
      'otf': find('font'),
      'woff': find('font'),
      'woff2': find('font'),

      // text
      'log': find('text'),
      'cfg': find('text'),
      'lock': find('text'),

      // TXT
      'txt': find('txt'),

      // CSV
      'csv': find('csv'),

      // JSON
      'json': find('json'),
      'jsonc': find('json'),
      'jsonl': find('json'),
      'json5': find('json'),

      // YML
      'yml': find('yml'),
      'yaml': find('yml'),

      // TOML
      'toml': find('toml'),

      // XML
      'xml': find('xml'),
      'plist': find('xml'),

      // SVG
      'svg': find('svg'),

      // HTML
      'html': find('html'),

      // CSS
      'css': find('css'),

      // MD
      'md': find('md'),
      'mdx': find('md'),
      'mdoc': find('md'),

      // SH
      'sh': find('sh'),

      // SQL
      'sql': find('sql'),

      // PDF
      'pdf': find('pdf'),

      // JavaScript - ES2026
      'js': find('javascript'),
      'jsx': find('javascript'),
      'config.js': find('javascript', '3'),

      // TypeScript - 7.0.2
      'ts': find('typescript'),
      'tsx': find('typescript'),
      'd.ts': find('typescript', '2'),
      'config.ts': find('typescript', '3'),

      // C - C23
      'h': find('header'),
      'c': find('c'),

      // C++ - C++23
      'hpp': find('header'),
      'hh': find('header'),
      'hxx': find('header'),
      'cpp': find('cplusplus'),
      'cc': find('cplusplus'),
      'cxx': find('cplusplus'),

      // Objective-C - 2.0
      'm': find('objc'),

      // Objective-C++ - 2.0
      'mm': find('objcplusplus'),

      // Swift - 6.4
      'swift': find('swift'),

      // Ruby - 4.0.7
      'rb': find('ruby'),
      'rake': find('ruby'),
      'gemspec': find('ruby', '2'),

      // Python - 3.14.7
      'py': find('python'),
      'pyi': find('python'),
      'pxd': find('header'),
      'pyx': find('python'),

      // Scala - 3.9.0
      'scala': find('scala'),
      'sc': find('scala'),
      'sbt': find('scala', '2'),

      // Kotlin - 2.4.20
      'kt': find('kotlin'),
      'kts': find('kotlin'),
      'gradle.kts': find('kotlin', '2'),

      // Cursor - 3.22.7
      'mdc': find('cursor') ?? find('md'),

      // Framer - 5.1.0
      'glsl': find('framer'),
      'hlsl': find('framer'),
      'wgsl': find('framer'),
      'metal': find('framer'),

      // GraphQL - 17.0.2
      'graphql': find('graphql'),
      'gql': find('graphql'),
      'graphqls': find('graphql'),

      // Prisma - 8.0.0
      'prisma': find('prisma'),
    },
    fileNames: {
      // text
      '.gitignore': find('text'),
      '.gitattributes': find('text'),
      '.gitmodules': find('text'),
      '.gitconfig': find('text'),

      // JavaScript - ES2026
      'jsonfig.json': find('javascript-3'),

      // TypeScript - 7.0.2
      'tsconfig.json': find('typescript-3'),

      // C - C23
      '.clang-format': find('text'),
      '.clang-format-ignore': find('text'),
      '.clang-tidy': find('text'),

      // Swift - 6.4
      'package.swift': find('swift-2'),
      'package.resolved': find('swift-2'),
      '.swift-format': find('swift-2'),
      '.swift-format-ignore': find('swift-2'),

      // Ruby - 4.0.7
      'gemfile': find('ruby-2'),
      'gemfile.lock': find('ruby-2'),
      'rakefile': find('ruby-2'),

      // Python - 3.14.7
      'pyproject.toml': find('python-2'),
      'pylock.toml': find('python-2'),
      'pyvenv.cfg': find('python-2'),
      'uv.lock': find('python-2'),

      // .env - 18.0.3
      '.env': find('text'),
      '.env.ci': find('text'),
      '.env.staging': find('text'),
      '.env.production': find('text'),
      '.env.vault': find('text'),
      '.env.me': find('text'),

      // Cursor - 3.22.7
      '.cursorignore': find('cursor'),
      'agents.md': find('cursor'),
      'readme': find('cursor'),
      'readme.md': find('cursor'),
      'readme.txt': find('cursor'),
      'license': find('cursor'),

      // Containerd - 2.4.0
      'containerfile': find('containerd'),
      '.containerignore': find('containerd'),

      // Docker - 29.8.1
      'dockerfile': find('docker'),
      '.dockerignore': find('docker'),

      // Node - 24.21.0
      'package.json': find('node'),
      'package-lock.json': find('node'),
      '.yarnrc.yml': find('node'),
      'yarn.lock': find('node'),

      // Deno - 2.9.7
      'deno.json': find('deno'),
      'deno.jsonc': find('deno'),
      'deno.lock': find('deno'),

      // GraphQL - 17.0.2
      '.graphqlrc': find('graphql'),
      '.graphqlrc.js': find('graphql'),
      '.graphqlrc.ts': find('graphql'),
      '.graphqlrc.json': find('graphql'),
      '.graphqlrc.yml': find('graphql'),
      '.graphqlrc.yaml': find('graphql'),
      '.graphqlrc.toml': find('graphql'),
      'graphql.config.js': find('graphql'),
      'graphql.config.ts': find('graphql'),
      'graphql.config.json': find('graphql'),
      'graphql.config.toml': find('graphql'),

      // Prisma - 8.0.0
      'prisma.config.ts': find('prisma'),

      // Prettier - 3.9.9
      '.prettierrc': find('prettier'),
      '.prettierrc.js': find('prettier'),
      '.prettierrc.ts': find('prettier'),
      '.prettierrc.json': find('prettier'),
      '.prettierrc.json5': find('prettier'),
      '.prettierrc.yml': find('prettier'),
      '.prettierrc.yaml': find('prettier'),
      '.prettierrc.toml': find('prettier'),
      'prettier.config.js': find('prettier'),
      'prettier.config.ts': find('prettier'),

      // ESLint - 10.11.0
      'eslint.config.js': find('eslint'),
      'eslint.config.ts': find('eslint'),

      // Next - 16.3.6
      'next.config.js': find('next'),
      'next.config.ts': find('next'),
      'next-env.d.ts': find('next'),

      // Vite - 8.3.1
      'vite.config.js': find('vite'),
      'vite.config.ts': find('vite'),

      // Vitest - 5.0.1
      'vitest.config.js': find('vite'),
      'vitest.config.ts': find('vite'),

      // Codecov - 11.3.1
      'codecov.yml': find('codecov'),
    },
    // folderNames: { ... },
  };
}

export function iconTheme(files: string[], theme: IconTheme) {
  return {
    ...config(files, 'd'),
    light: { ...config(files) },
    iconDefinitions: Object.assign(
      {},
      ...files.map((file) => ({
        [file.split('.')[0]]: {
          iconPath: `./${path.join(theme.assets, file)}`,
        },
      })),
    ),
  };
}
