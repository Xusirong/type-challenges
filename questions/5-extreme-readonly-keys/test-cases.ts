import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

type Mark<T> = {
  [key in keyof T]: Equal<{ -readonly [x in key]: T[x] }, { [x in key]: T[x] }> extends false ? key : never
}

type GetReadonlyKeys<T> = NonNullable<Mark<T>[keyof Mark<T>]>