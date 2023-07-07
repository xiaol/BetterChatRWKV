import { Prompt } from '@type/prompt';

// prompts from https://github.com/f/awesome-chatgpt-prompts
const defaultPrompts: Prompt[] = [
  {
    id: '0d3e9cb7-b585-43fa-acc3-840c189f6b93',
    name: '英语翻译官',
    prompt:
      '你现在是一名专业的官方翻译人员，我会给你一段中文，你需要将它翻译为英文，并尽量地使用更漂亮、更优雅地高级英语单词和句子。请翻译以下内容：XXXXX',
  },
];

export default defaultPrompts;
