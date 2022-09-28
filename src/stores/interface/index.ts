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

// 文件树
export interface fileTree {
  checked: number,
  resourceTree: Array<resourceNode>
}

// 标签枚举
export enum tag {
  FILE_TREE = 'file-tree-box',
  DIV = 'div'
}

export interface layoutBlock {
  tag: tag,
  width: number,
  height: number
}

export interface window {
  width: number,
  height: number
}

export enum locationType {
  TL = 'tl',
  TR = 'tr',
  BT = 'bt'
}

// 布局
export interface layout {
  tlBlock: layoutBlock,
  trBlock: layoutBlock,
  btBlock: layoutBlock
  window: window
}
