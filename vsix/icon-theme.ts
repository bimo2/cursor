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

      // HTML
      'html': find('html'),

      // CSS
      'css': find('css'),

      // SVG
      'svg': find('svg'),

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

      // JavaScript
      'js': find('javascript'),
      'jsx': find('javascript'),
      'config.js': find('javascript', '3'),

      // TypeScript
      'ts': find('typescript'),
      'tsx': find('typescript'),
      'd.ts': find('typescript', '2'),
      'config.ts': find('typescript', '3'),

      // Header
      'h': find('header'),
      'hpp': find('header'),
      'hh': find('header'),
      'hxx': find('header'),
      'pxd': find('header'),

      // C
      'c': find('c'),

      // C++
      'cpp': find('cplusplus'),
      'cc': find('cplusplus'),
      'cxx': find('cplusplus'),

      // Objective-C
      'm': find('objc'),

      // Objective-C++
      'mm': find('objcplusplus'),

      // Swift
      'swift': find('swift'),

      // Ruby
      'rb': find('ruby'),
      'rake': find('ruby'),
      'gemspec': find('ruby', '2'),

      // Python
      'py': find('python'),
      'pyi': find('python'),
      'pyx': find('python'),

      // Scala
      'scala': find('scala'),
      'sc': find('scala'),
      'sbt': find('scala', '2'),

      // Kotlin
      'kt': find('kotlin'),
      'kts': find('kotlin'),
      'gradle.kts': find('kotlin', '2'),
    },
    fileNames: {
      // text
      '.env': find('text'),
      '.env.ci': find('text'),
      '.env.staging': find('text'),
      '.env.production': find('text'),
      '.env.vault': find('text'),
      '.env.me': find('text'),
      '.clang-format': find('text'),
      '.clang-format-ignore': find('text'),

      // JavaScript
      'jsonfig.json': find('javascript-3'),

      // TypeScript
      'tsconfig.json': find('typescript-3'),

      // Swift
      'package.swift': find('swift', '2'),
      'package.resolved': find('swift-2'),
      '.swift-version': find('swift-2'),
      '.swift-format': find('swift-2'),
      '.swift-format-ignore': find('swift-2'),

      // Ruby
      'gemfile': find('ruby-2'),
      'gemfile.lock': find('ruby-2'),
      'rakefile': find('ruby-2'),
      '.ruby-version': find('ruby-2'),

      // Python
      'pyproject.toml': find('python-2'),
      'pylock.toml': find('python-2'),
      '.python-version': find('python-2'),
      'uv.lock': find('python-2'),

      // Scala
      'build.properties': find('scala-2'),

      // Kotlin
      'gradle.properties': find('kotlin-2'),
      'gradle-wrapper.properties': find('kotlin-2'),
      'gradle.lockfile': find('kotlin-2'),
      'libs.versions.toml': find('kotlin-2'),
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
