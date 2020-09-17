// TODO
// don't load all translations in memory, when we have a lot of translations
// see
// https://github.com/react-native-community/react-native-localize/blob/master/example/src/AsyncExample.js

import I18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

const de = require('./de.json')

export const locales = ['en', 'de']
const fallback = { languageTag: 'en', isRTL: false };

const { languageTag } = RNLocalize.findBestAvailableLanguage(locales) || fallback

I18n.defaultLocale = languageTag
I18n.keySeparator = false
I18n.fallbacks = true
I18n.missingTranslation = scope => scope

I18n.translations = {
  de,
}

const defaultLocale = { languageTag: 'en', isRTL: false }

/** @dev Only english is offered until the Dutch and German terms are polished, previous code:
 *
 * import * as RNLocalize from 'react-native-localize'
 * const { languageTag } =
 * RNLocalize.findBestAvailableLanguage(locales) || fallback
 * I18n.locale = languageTag
 */

I18n.locale = defaultLocale.languageTag

const localeSpecificImages = {
  en: {
    '01.jpg': require('src/resources/img/en/01.jpg'),
    '02.jpg': require('src/resources/img/en/02.jpg'),
    '03.jpg': require('src/resources/img/en/03.jpg'),
  },
  de: {
    '01.jpg': require('src/resources/img/de/01.jpg'),
    '02.jpg': require('src/resources/img/de/02.jpg'),
    '03.jpg': require('src/resources/img/de/03.jpg'),
  },
  nl: {
    '01.jpg': require('src/resources/img/nl/01.jpg'),
    '02.jpg': require('src/resources/img/nl/02.jpg'),
    '03.jpg': require('src/resources/img/nl/03.jpg'),
  },
}

export const getI18nImage = (filename: string): string => {
  const locale = locales.includes(I18n.locale)
    ? I18n.locale
    : I18n.defaultLocale

  return localeSpecificImages[locale][filename]
}

export default I18n
