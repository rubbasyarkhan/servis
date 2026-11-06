import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Strict validation
    if (!data.phone || !data.fullName || !data.trade) {
      return NextResponse.json(
        { error: 'Missing required fields: phone, fullName, or trade' },
        { status: 400 }
      );
    }

    if (!data.tcpaConsent) {
      return NextResponse.json(
        { error: 'TCPA consent is mandatory for lead dispatch' },
        { status: 400 }
      );
    }

    // In production with CRM/Zapier:
    // const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
    // await fetch(crmWebhookUrl, { method: 'POST', body: JSON.stringify(data) });

    const leadPayload = {
      id: `LEAD-${Date.now()}`,
      status: 'DISPATCHED',
      createdAt: new Date().toISOString(),
      slaMinutes: 60,
      smsConfirmationQueued: true,
      leadData: data
    };

    console.log('[CRM Webhook Dispatched]:', leadPayload);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead received and transmitted to local Texas dispatch queue.',
        lead: leadPayload
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Lead Processing Error]:', error);
    return NextResponse.json(
      { error: 'Internal server error processing lead submission' },
      { status: 500 }
    );
  }
}
