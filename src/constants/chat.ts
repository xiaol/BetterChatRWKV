import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage = `你是一个有用的人工智能助手，由RWKV团队开发，你不但可以进行文本的对话，而且对图片、语音都有着不错的理解能力。`;

export const modelOptions: ModelOptions[] = [
  'RWKV-World-7B',
  //'RWKVCHN',
  //'gpt-3.5-turbo',
  //'gpt-4',
 // 'StaringGPT',
];

export const defaultModel = 'RWKV-World-7B';

export const modelMaxToken = {
  'RWKV-World-7B':4096,
  'RWKVCHN' : 4096,
  'gpt-3.5-turbo': 4096,
  'gpt-4': 8192,
  'StaringGPT': 4096
  
};

export const modelCost = {
  'RWKV-World-7B': {
    prompt: { price: 0.0000, unit: 1000 },
    completion: { price: 0.0000, unit: 1000 },
  },
  'RWKVCHN': {
    prompt: { price: 0.0000, unit: 1000 },
    completion: { price: 0.0000, unit: 1000 },
  },
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'StaringGPT': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1.5,
  presence_penalty: 0.4,
  top_p: 0.3,
  frequency_penalty: 0.4,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : '新的对话',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
