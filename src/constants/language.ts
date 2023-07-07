// languages that have translation files in `public/locales`
// export const i18nLanguages = [
//   // 'ar',
//   'da',
//   'de',
//   'en',
//   'en-GB',
//   'en-US',
//   'es',
//   'fr',
//   'fr-FR',
//   'it',
//   'ja',
//   'ms',
//   'nb',
//   'ro',
//   'ru',
//   'sv',
//   // 'ug',
//   'yue',
//   'zh',
//   'zh-CN',
//   'zh-HK',
//   'zh-TW',
// ] as const;

// // languages that are selectable on the web page
// export const selectableLanguages = [
//   // 'ar',
//   'da',
//   'de',
//   // 'en',
//   'en-GB',
//   'en-US',
//   'es',
//   // 'fr',
//   'fr-FR',
//   'it',
//   'ja',
//   'ms',
//   'nb',
//   'ro',
//   'ru',
//   'sv',
//   // 'ug',
//   'yue',
//   // 'zh',
//   'zh-CN',
//   // 'zh-HK',
//   'zh-TW',
// ] as const;

// export const languageCodeToName = {
//   // 'ar': 'العربية',
//   'da': 'Dansk',
//   'de': 'Deutsch',
//   'en': 'English',
//   'en-GB': 'English (UK)',
//   'en-US': 'English (US)',
//   'es': 'Español',
//   'fr': 'Français',
//   'fr-FR': 'Français', // Français (France). no need to include "France" at this time, as there is currently only one variant
//   'it': 'Italiano',
//   'ja': '日本語',
//   'ms': 'Bahasa Melayu',
//   'nb': 'Norsk bokmål',
//   'ro': 'Română',
//   'ru': 'Русский',
//   'sv': 'Svenska',
//   // 'ug': 'ئۇيغۇرچە',
//   'yue': '廣東話',
//   'zh': '中文',
//   'zh-CN': '中文（简体）',
//   'zh-HK': '廣東話', // 中文（香港）. currently there is no support for `zh-HK`, so `zh-HK` will be regarded as `yue`
//   'zh-TW': '中文（台灣）',
// };

export const i18nLanguages = [
  'zh-CN'
] as const;

// languages that are selectable on the web page
export const selectableLanguages = [
  'zh-CN'
] as const;

export const languageCodeToName = {
  'zh-CN': '中文（简体）'
};
