import Airtable from 'airtable';

const apiToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

console.log('🔧 Airtable Config Check:', {
  hasToken: !!apiToken,
  tokenPreview: apiToken ? apiToken.substring(0, 10) + '...' : 'MISSING',
  baseId: baseId || 'MISSING',
  tableName: tableName || 'MISSING'
});

if (!apiToken || !baseId || !tableName) {
  throw new Error('Missing Airtable configuration. Check your .env file.');
}

const base = new Airtable({ apiKey: apiToken }).base(baseId);

export interface CustomerData {
  name?: string;
  phone: string;
  email?: string;
  referralSource: string;
}

export async function submitCustomer(data: CustomerData): Promise<void> {
  console.log('📝 Starting submission with data:', data);
  
  try {
    const fields: any = {
      'Phone Number': data.phone,
    };

    if (data.name) {
      fields['Full Name'] = data.name;
    }

    if (data.email) {
      fields['Email'] = data.email;
    }
console.log('📤 About to send to Airtable...');
console.log('📍 Base ID:', baseId);
console.log('📍 Table Name:', tableName);
console.log('📍 Fields to send:', fields);

const result = await base(tableName).create([{ fields }]);

console.log('✅ Airtable API Response:');
console.log('Response type:', typeof result);
console.log('Is array?', Array.isArray(result));
if (result && result[0]) {
  console.log('Record ID:', result[0].id);
  console.log('Record fields:', result[0].fields);
  console.log('Full record:', result[0]);
}
console.log('Full result:', result);

    
  } catch (error: any) {
    console.error('❌ ERROR submitting to Airtable:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Full error:', error);
    console.error('Error status:', error.statusCode);
    throw new Error('Failed to submit form. Please try again.');
  }
}
