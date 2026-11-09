'use client';

import React, { useState, useEffect } from 'react';
import { useClient } from 'sanity';
import { Card, Stack, Text, Button, Box, Heading, Flex, Spinner } from '@sanity/ui';
import { SEED_DOCUMENTS } from './seed-data';

export function AutoPopulateTool() {
  const client = useClient({ apiVersion: '2024-01-01' });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<{ current: number; total: number; title: string } | null>(null);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [existingCount, setExistingCount] = useState<number | null>(null);

  useEffect(() => {
    client.fetch('*[_type in ["service", "location", "siteSettings"]]')
      .then((docs) => {
        setExistingCount(docs.length);
        if (docs.length === 0) {
          // Auto-trigger if empty
          startPopulating();
        } else {
          setCompleted(true);
        }
      })
      .catch((err) => {
        console.error('Fetch count error:', err);
      });
  }, []);

  const startPopulating = async () => {
    setLoading(true);
    setError(null);
    try {
      const total = SEED_DOCUMENTS.length;
      let count = 0;
      for (const doc of SEED_DOCUMENTS) {
        count++;
        setProgress({
          current: count,
          total,
          title: (doc as any).title || (doc as any).city || doc._id
        });
        await client.createOrReplace(doc as any);
      }
      setCompleted(true);
      setLoading(false);
      setExistingCount(total);
    } catch (err: any) {
      console.error('Seeding error:', err);
      setError(err?.message || 'Failed to populate dataset. Make sure you are signed into Sanity.');
      setLoading(false);
    }
  };

  return (
    <Box padding={5} style={{ maxWidth: 750, margin: '40px auto' }}>
      <Card padding={5} radius={3} shadow={3} tone="primary">
        <Stack space={4}>
          <Heading size={3}>⚡ Service Squad CMS Automatic Data Importer</Heading>
          
          <Text size={2} muted>
            This tool automatically populates your Sanity cloud project (<strong>wtk1cisw</strong>) with all <strong>42 documents</strong> from the Master Agreement:
          </Text>

          <Card padding={3} radius={2} tone="transparent" border>
            <Stack space={2}>
              <Text size={1}>• <strong>35 Trade Services</strong> (Water Damage, Fire, Mold, Plumbing, HVAC, Reconstruction, Board-up, Packout)</Text>
              <Text size={1}>• <strong>6 Texas Franchise Hubs</strong> (Houston Central, Katy, Sugar Land, The Woodlands, Pearland, Cypress)</Text>
              <Text size={1}>• <strong>Corporate Site Settings</strong> (24/7 hotline, dispatch radius, CallRail DNI, CRM webhook)</Text>
            </Stack>
          </Card>

          {progress && (
            <Card padding={3} radius={2} tone="caution">
              <Flex align="center" gap={3}>
                {loading && <Spinner />}
                <Text size={1} weight="semibold">
                  Uploading ({progress.current}/{progress.total}): {progress.title}
                </Text>
              </Flex>
            </Card>
          )}

          {completed && (
            <Card padding={4} radius={2} tone="positive">
              <Stack space={3}>
                <Heading size={2} style={{ color: '#22c55e' }}>🎉 All Documents Successfully Loaded!</Heading>
                <Text size={2}>
                  Your Sanity CMS is now populated with all <strong>{existingCount || 42} documents</strong>.
                </Text>
                <Text size={1} muted>
                  You can now view and edit every service, location, and global setting under the <strong>Content</strong> tab.
                </Text>
                <Button
                  tone="positive"
                  text="👉 Open Services in Studio Now"
                  onClick={() => { window.location.href = '/studio/structure/service'; }}
                />
              </Stack>
            </Card>
          )}

          {error && (
            <Card padding={3} radius={2} tone="critical">
              <Text size={1} weight="semibold">Upload Error: {error}</Text>
            </Card>
          )}

          {!completed && !loading && (
            <Button
              tone="primary"
              text="🚀 Click Here to Populate All 42 Documents into Sanity"
              onClick={startPopulating}
            />
          )}

          {loading && (
            <Flex align="center" justify="center" gap={2} padding={3}>
              <Spinner />
              <Text size={2} weight="bold">Populating documents into Sanity cloud...</Text>
            </Flex>
          )}
        </Stack>
      </Card>
    </Box>
  );
}
export default AutoPopulateTool;
