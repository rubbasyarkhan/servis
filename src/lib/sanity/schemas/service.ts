import { defineType, defineField } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      title: 'Short Navigation Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'e.g. Droplets, Flame, Wrench, Shield, Home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Audience Category',
      type: 'string',
      options: {
        list: [
          { title: 'Both Residential & Commercial', value: 'both' },
          { title: 'Residential Only', value: 'residential' },
          { title: 'Commercial Only', value: 'commercial' },
        ],
      },
      initialValue: 'both',
    }),
    defineField({
      name: 'locations',
      title: 'Service Locations / Coverage Hubs',
      description: 'Select one or more location hubs where this service is actively offered (mandatory).',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'location' }],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('You must assign this service to at least one location hub.'),
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Banner Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Service Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emergencyResponseTime',
      title: 'Emergency Response SLA',
      type: 'string',
      initialValue: '< 60 Minutes On-Site',
    }),
    defineField({
      name: 'subServices',
      title: 'Sub-Services & Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Sub-Service Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            {
              name: 'keySteps',
              title: 'Key Bullet Points',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'processSteps',
      title: 'Step-by-Step Restoration Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number', type: 'number' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Details', type: 'text', rows: 2 },
            { name: 'timeWindow', title: 'Estimated Timeframe', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'equipment',
      title: 'Industrial Equipment Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'commercialCapabilities',
      title: 'Commercial Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'residentialCapabilities',
      title: 'Residential Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'insuranceGuidance',
      title: 'Insurance Assistance Information',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        { name: 'title', title: 'Meta Title', type: 'string' },
        { name: 'description', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
});
