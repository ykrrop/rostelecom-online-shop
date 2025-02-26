'use client'

import { $lang } from '@/context/lang'
import { useUnit } from 'effector-react'
import translationJson from '@/public/translations/translations.json'

export default function useLang() {
  const lang = useUnit($lang)
  const translations = translationJson
  return { lang, translations }
}
