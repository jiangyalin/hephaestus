import type { resourceType, fileType, tagName, locationType, directionType, NewFileCode } from './enum'

export interface resourceNode {
  id: number,
  name: string, // 文件或文件夹名
  type: resourceType, // 资源类型
  fileType?: fileType, // 文件类型
  isExpand?: boolean, // 是否为展开状态
  path?: string, // 文件路径
  node: Array<resourceNode>
}

// 文件树
export interface fileTree {
  checked: number,
  resourceTree: Array<resourceNode>
}

export interface layoutBlock {
  tag: tagName,
  width: number,
  height: number
}

export interface window {
  width: number,
  height: number
}

// 布局
export interface layout {
  tlBlock: layoutBlock,
  trBlock: layoutBlock,
  btBlock: layoutBlock
  window: window,
  dragMack: {
    block: locationType | '',
    direction: directionType | ''
  }
}

// 菜单树
export interface MenuNode {
  title: string,
  value: number | string,
  code?: NewFileCode,
  icon?: string,
  menuNode?: Array<MenuNode>
}
