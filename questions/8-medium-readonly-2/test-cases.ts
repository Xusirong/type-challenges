import { Alike, Expect } from '@type-challenges/utils'
import { type } from 'os'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

type MyReadonly2<T, K = any> = T & {
  readonly [key in keyof T as key extends K ? key : never]: T[key]
}

type A = MyReadonly2<Todo1, 'title' | 'description'>