import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectId, dataset } from './src/lib/sanity/config';
import { schemaTypes } from './src/lib/sanity/schemas';
import AutoPopulateTool from './src/lib/sanity/AutoPopulateTool';

export default defineConfig({
  name: 'default',
  title: 'Service Squad CMS Studio',
  projectId: projectId || 'wtk1cisw',
  dataset: dataset || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  tools: (prev) => [
    ...prev,
    {
      name: 'populate-cms',
      title: '⚡ 1-Click Populate CMS',
      component: AutoPopulateTool,
    },
  ],
  schema: {
    types: schemaTypes,
  },
});
