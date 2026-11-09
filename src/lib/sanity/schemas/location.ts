import { defineType, defineField } from 'sanity';

export const locationType = defineType({
  name: 'location',
  title: 'Locations / Franchises',
  type: 'document',
  fields: [
    defineField({
      name: 'city',
      title: 'City Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'city',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State Abbreviation',
      type: 'string',
      initialValue: 'TX',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zip',
      title: 'Primary Dispatch ZIP Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isMainHub',
      title: 'Is Corporate Headquarters / Main Hub',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'serviceRadiusMiles',
      title: 'Emergency Service Radius (Miles)',
      type: 'number',
      initialValue: 30,
    }),
    defineField({
      name: 'phone',
      title: 'Direct Dispatch Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Physical Facility Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    }),
    defineField({
      name: 'geo',
      title: 'Geo Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', title: 'Latitude', type: 'number' },
        { name: 'lng', title: 'Longitude', type: 'number' },
      ],
    }),
    defineField({
      name: 'coveredZips',
      title: 'Covered ZIP Codes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'dniTrackingNumber',
      title: 'CallRail DNI Dynamic Number (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'googleReviewRating',
      title: 'Google Review Rating (e.g. 4.9)',
      type: 'number',
      initialValue: 4.9,
    }),
    defineField({
      name: 'googleReviewCount',
      title: 'Total Verified Reviews Count',
      type: 'number',
      initialValue: 500,
    }),
  ],
});
