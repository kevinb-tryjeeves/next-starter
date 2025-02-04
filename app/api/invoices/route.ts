import { NextResponse } from 'next/server';

export async function GET() {
  const mockInvoices = [
    {
      id: '1',
      invoiceNumber: 'INV-2025-002',
      clientName: 'Global Solutions Ltd',
      fundingSource: {
        accountName: 'MX Bank Account',
        accountNumber: '8877263213'
      },
      amount: 2750.5,
      currency: 'MXN',
      status: 'pending',
      dueDate: '2025-02-12',
      createdAt: '2025-02-02'
    },
    {
      id: '2',
      invoiceNumber: 'INV-2025-001',
      clientName: 'Acme Corp',
      fundingSource: {
        accountName: 'US Bank Account',
        accountNumber: '2277281234'
      },
      amount: 1500,
      currency: 'USD',
      status: 'paid',
      dueDate: '2025-02-13',
      createdAt: '2025-02-03'
    },
    {
      id: '3',
      invoiceNumber: 'INV-2025-003',
      clientName: 'TechStart Inc',
      fundingSource: {
        accountName: 'US Bank Account',
        accountNumber: '2277281234'
      },
      amount: 899.99,
      currency: 'USD',
      status: 'pending',
      dueDate: '2025-02-11',
      createdAt: '2025-02-01'
    }
  ];

  return NextResponse.json(mockInvoices);
} 