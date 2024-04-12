import path from 'path'
import { has } from 'lodash-es'

import { Language } from '@/lib/gql/generates/graphql'

import languages from './languages'

const filenames: Record<string, string[]> = {}
const extnames: Record<string, string[]> = {}

for (const [alias, associations] of Object.entries(languages)) {
  for (const filename of associations.filenames) {
    if (!has(filenames, filename)) {
      filenames[filename] = []
    }

    filenames[filename].push(alias)
  }

  for (const extname of associations.extnames) {
    if (!has(extnames, extname)) {
      extnames[extname] = []
    }

    extnames[extname].push(alias)
  }
}

// Fork from
// https://github.com/TomerAberbach/filename2prism/
export const filename2prism: (filename: string) => Array<string> = filename => {
  const result: string[] = []
  return result
    .concat(
      filenames[path.basename(filename)],
      extnames[path.extname(filename).substring(1)]
    )
    .filter(Boolean)
}

export const toProgrammingLanguageDisplayName = (lan: Language): string => {
  const displayName =
    Object.keys(Language)[Object.values(Language).indexOf(lan)] || ''
  const mapping: Record<string, string> = {
    csharp: 'C#',
    cpp: 'C++',
    javascript: 'JavaScript',
    typescript: 'TypeScript'
  }
  return mapping[displayName.toLocaleLowerCase()] || displayName
}
