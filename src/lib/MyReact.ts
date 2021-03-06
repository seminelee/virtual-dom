import MyElement from './MyElement'

const MyReact = {
  // 创建虚拟DOM，返回虚拟节点
  createElement(type: string, props: any, children: any[]) {
    return new MyElement(type, props, children)
  }
}

export default MyReact
