import config from '@/config'

const hello = (text: string): string => {
  return `hello ${text}`
}

console.log(hello(config.name))
