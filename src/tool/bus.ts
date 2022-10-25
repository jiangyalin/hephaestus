import mitt from 'mitt'

// type Events = {
//   foo: string;
//   bar: number;
// }

const bus = mitt()

export default bus
