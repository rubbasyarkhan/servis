import { defineType, defineField } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Global Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Brand Name',
      type: 'string',
      initialValue: 'Service Squad',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalEntity',
      title: 'Legal Entity Name',
      type: 'string',
      initialValue: 'Service Squad Restoration LLC',
    }),
    defineField({
      name: 'emergencyPhone',
      title: 'Toll-Free Emergency Dispatch Phone',
      type: 'string',
      initialValue: '(713) 555-7782',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'corporateOffice',
      title: 'Corporate Headquarters Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    }),
    defineField({
      name: 'licenseNumber',
      title: 'Contractor License / Certifications',
      type: 'string',
      initialValue: 'TDLR #109284 • IICRC Certified Firm',
    }),
    defineField({
      name: 'operatingHours',
      title: 'Operating Hours Label',
      type: 'string',
      initialValue: '24/7/365 Emergency Dispatch',
    }),
    defineField({
      name: 'emergencyResponseSLA',
      title: 'Emergency Response SLA',
      type: 'string',
      initialValue: '< 60 Minutes Rapid On-Site Dispatch',
    }),
    defineField({
      name: 'serviceRadiusMiles',
      title: 'Service Radius (Miles)',
      type: 'number',
      initialValue: 30,
    }),
    defineField({
      name: 'crmWebhookUrl',
      title: 'CRM Lead Dispatch Webhook URL',
      type: 'url',
    }),
    defineField({
      name: 'callRailDniScript',
      title: 'CallRail DNI Embed Script URL',
      type: 'string',
    }),
  ],
});
