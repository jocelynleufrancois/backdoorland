import type { VercelRequest, VercelResponse } from '@vercel/node';
import Airtable from 'airtable';

interface CustomerData {
  name?: string;
  phone?: string;
  email?: string;
  referralSource?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    // Validate environment variables
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
      console.error('Missing Airtable environment variables');
      return res.status(500).json({
        ok: false,
        error: 'Server configuration error'
      });
    }

    // Parse and validate request body
    const data: CustomerData = req.body;

    if (!data.email && !data.phone) {
      return res.status(400).json({
        ok: false,
        error: 'At least email or phone is required'
      });
    }

    // Initialize Airtable
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

    // Prepare fields for Airtable
    const fields: Record<string, any> = {};
    if (data.name) fields.Name = data.name;
    if (data.phone) fields.Phone = data.phone;
    if (data.email) fields.Email = data.email;
    if (data.referralSource) fields['Referral Source'] = data.referralSource;

    // Add timestamp
    fields['Created At'] = new Date().toISOString();

    // Create record in Airtable
    const record = await base(AIRTABLE_TABLE_NAME).create([{ fields }]);

    console.log('Successfully created Airtable record:', record[0].getId());

    return res.status(200).json({
      ok: true,
      recordId: record[0].getId()
    });

  } catch (error: any) {
    console.error('Error submitting to Airtable:', error);
    console.error('Error stack:', error.stack);

    return res.status(500).json({
      ok: false,
      error: error.message || 'Failed to submit data',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
