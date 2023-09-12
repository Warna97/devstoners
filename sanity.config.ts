import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'devstoners',

  projectId: 'a2thk4ba',
  dataset: 'production',
  basePath: "/studio",

  plugins: [deskTool(), ],

  schema: {
    types: schemaTypes,
  },
})
