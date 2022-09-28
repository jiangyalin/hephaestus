// 资源类型
export enum resourceType {
  FOLDER = 'folder',
  FILE = 'file'
}

// 文件类型
export enum fileType {
  JS = 'js',
  TS = 'ts',
  HTML = 'html',
  CSS = 'css',
  SCSS = 'scss',
  SASS = 'sass'
}

export interface resourceNode {
  id: number,
  name: string, // 文件或文件夹名
  type: resourceType, // 资源类型
  fileType?: fileType, // 文件类型
  node: Array<resourceNode>
}

export interface fileTree {
  checked: number,
  resourceTree: Array<resourceNode>
}
