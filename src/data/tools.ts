export interface ToolMeta {
  slug: string;
  title: string;
  short: string;
  blurb: string;
}

// Central registry: homepage grid + "related tools" interlinking on every page.
export const tools: ToolMeta[] = [
  {
    slug: 'cost-per-mile-calculator',
    title: 'Cost Per Mile Calculator',
    short: 'Cost per mile',
    blurb: 'Your true cost per mile from fixed and variable costs — plus break-even rate and profit at any rate.',
  },
  {
    slug: 'ifta-calculator',
    title: 'IFTA Fuel Tax Calculator',
    short: 'IFTA fuel tax',
    blurb: 'Estimate your quarterly IFTA return: miles and fuel by state, current rates built in.',
  },
  {
    slug: 'load-profit-calculator',
    title: 'Load Profit Calculator',
    short: 'Load profit',
    blurb: 'Should you take that load? Revenue, deadhead, dispatch fee and cost per mile — profit in one shot.',
  },
  {
    slug: 'fuel-cost-calculator',
    title: 'Fuel Cost Calculator',
    short: 'Trip fuel cost',
    blurb: 'Gallons and dollars for any trip from distance, MPG and pump price.',
  },
  {
    slug: 'per-diem-calculator',
    title: 'Per Diem Tax Deduction Calculator',
    short: 'Per diem deduction',
    blurb: 'Days on the road into a tax deduction: 2026 IRS rates, partial days and the 80% rule handled.',
  },
  {
    slug: 'truck-payment-calculator',
    title: 'Truck Payment Calculator',
    short: 'Truck payment',
    blurb: 'Monthly payment, total interest and all-in cost for a truck loan before you sign.',
  },
  {
    slug: 'pay-per-mile-calculator',
    title: 'Driver Pay Per Mile Calculator',
    short: 'Pay per mile',
    blurb: 'CPM pay into weekly, monthly and yearly gross — and what a 1¢ raise is really worth.',
  },
  {
    slug: 'detention-pay-calculator',
    title: 'Detention Pay Calculator',
    short: 'Detention pay',
    blurb: 'Hours stuck at the dock into an invoice number: free time, detention rate, what to bill.',
  },
  {
    slug: 'fuel-surcharge-calculator',
    title: 'Fuel Surcharge Calculator',
    short: 'Fuel surcharge',
    blurb: 'Fair fuel surcharge per mile from the DOE average, your base price and MPG.',
  },
  {
    slug: 'hours-of-service-calculator',
    title: 'Hours of Service Calculator (70/8 Recap)',
    short: 'Hours of service',
    blurb: 'How many hours you have left on the 70/8 or 60/7 clock — and what comes back tomorrow.',
  },
];

export function relatedFor(slug: string, count = 4) {
  const idx = tools.findIndex((t) => t.slug === slug);
  const out = [];
  for (let i = 1; out.length < count && i < tools.length; i++) {
    out.push(tools[(idx + i) % tools.length]);
  }
  // Trailing slash must match the canonical URL Astro emits (directory build
  // format), or Google indexes both variants and splits the ranking signal.
  return out.map((t) => ({ href: `/${t.slug}/`, label: t.title }));
}
