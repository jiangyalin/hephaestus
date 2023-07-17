export enum Code {
  PROJECT = 'PROJECT',
  FILE = 'FILE',
  HTML_FILE = 'HTML_FILE',
  STYLESHEET = 'STYLESHEET',
  JAVASCRIPT_FILE = 'JAVASCRIPT_FILE',
  TYPESCRIPT_FILE = 'TYPESCRIPT_FILE'
}

export interface Menu {
  title: string,
  value: number,
  code?: Code,
  icon?: string,
  menuNode?: Array<Menu>
}

const menu: Array<Menu> = [{
  title: 'File',
  value: 1,
  menuNode: [{
    title: 'New',
    value: 12,
    menuNode: [{
      title: 'Project',
      value: 15,
      code: Code.PROJECT
    }, {
      title: 'File',
      value: 16,
      code: Code.FILE
    }, {
      title: 'HTML File',
      value: 17,
      code: Code.HTML_FILE
    }, {
      title: 'Stylesheet',
      value: 18,
      code: Code.STYLESHEET
    }, {
      title: 'JavaScript File',
      value: 19,
      code: Code.JAVASCRIPT_FILE
    }, {
      title: 'TypeScript File',
      value: 20,
      code: Code.TYPESCRIPT_FILE
    }]
  }, {
    title: 'Open',
    value: 13
  }, {
    title: 'Save as...',
    value: 14
  }]
}, {
  title: 'Edit',
  value: 2
}, {
  title: 'View',
  value: 3
}, {
  title: 'Navigate',
  value: 4
}, {
  title: 'Code',
  value: 5
}, {
  title: 'Refactor',
  value: 6
}, {
  title: 'Run',
  value: 7
}, {
  title: 'Tools',
  value: 8
}, {
  title: 'Git',
  value: 9
}, {
  title: 'Window',
  value: 10
}, {
  title: 'Help',
  value: 11
}]

export {
  menu
}
