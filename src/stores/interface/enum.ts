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

// 标签枚举
export enum tagName {
  FILE_TREE = 'file-tree-box',
  EDITOR = 'editor-box',
  DIV = 'div',
  TERMINAL = 'terminal-box'
}

export enum locationType {
  TL = 'tl',
  TR = 'tr',
  BT = 'bt'
}

// 方向类型
export enum directionType {
  TP = 'tp',
  BT = 'bt',
  FL = 'fl',
  FR = 'fr'
}

// 新增文件标记
export enum NewFileCode {
  PROJECT = 'PROJECT',
  FILE = 'FILE',
  HTML_FILE = 'HTML_FILE',
  STYLESHEET = 'STYLESHEET',
  JAVASCRIPT_FILE = 'JAVASCRIPT_FILE',
  TYPESCRIPT_FILE = 'TYPESCRIPT_FILE'
}
