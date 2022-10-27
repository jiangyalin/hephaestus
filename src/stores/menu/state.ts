import { NewFileCode } from '../interface/enum'
import type { MenuNode } from '../interface/type'

export default (): Array<MenuNode> => {
  return [{
    title: 'File',
    value: 1,
    menuNode: [{
      title: 'New',
      value: 12,
      menuNode: [{
        title: 'Project',
        value: 15,
        code: NewFileCode.PROJECT
      }, {
        title: 'File',
        value: 16,
        code: NewFileCode.FILE
      }, {
        title: 'HTML File',
        value: 17,
        code: NewFileCode.HTML_FILE
      }, {
        title: 'Stylesheet',
        value: 18,
        code: NewFileCode.STYLESHEET
      }, {
        title: 'JavaScript File',
        value: 19,
        code: NewFileCode.JAVASCRIPT_FILE
      }, {
        title: 'TypeScript File',
        value: 20,
        code: NewFileCode.TYPESCRIPT_FILE
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
}
