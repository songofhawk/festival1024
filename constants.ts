
interface Translation {
  title: string;
  greeting: string;
  easterEggHint: string;
  easterEggMessage: string;
}

export const translations: { [key: string]: Translation } = {
  en: {
    title: "Happy Programmer's Day",
    greeting: "To all the geeks who change the world with code.",
    easterEggHint: "Hint: ↑↑↓↓←→←→BA",
    easterEggMessage: "SYSTEM BOOT...\n\n> console.log('Hello, the blue planet!');\n\nACCESS GRANTED.\nHappy Hacking, Fellow Geek!\n\n<END OF LINE>"
  },
  zh: {
    title: "程序员节快乐",
    greeting: "致所有用代码改变世界的极客们。",
    easterEggHint: "提示: ↑↑↓↓←→←→BA",
    easterEggMessage: "系统启动...\n\n> console.log('你好，小蓝星球！');\n\n授权成功。\n编程快乐，同为极客！\n\n<连接终端>"
  }
};
