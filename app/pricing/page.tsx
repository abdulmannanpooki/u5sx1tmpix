'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Basic',
    price: '$9',
    description: 'Essential features for personal use',
    features: [
      '1 Project',
      'Basic Analytics',
      'Email Support',
      'Community Access',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Advanced features for professionals',
    features: [
      '10 Projects',
      'Advanced Analytics',
      'Priority Email Support',
      'Community Access',
      'Custom Integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'Custom solutions for large teams',
    features: [
      'Unlimited Projects',
      'Dedicated Support',
      'Custom Analytics',
      'SLA & Uptime Guarantees',
      'Onboarding & Training',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Pricing Plans
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              'flex flex-col border',
              tier.popular
                ? 'border-primary bg-primary/10 shadow-lg'
                : 'border-border bg-card'
            )}
          >
            <CardHeader className="flex flex-col items-center space-y-2 p-6">
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {tier.description}
              </CardDescription>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                {tier.price}
                {tier.price !== 'Contact Us' && (
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                )}
              </p>
              {tier.popular && (
                <span className="mt-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
              <ul role="list" className="space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button
                variant={tier.popular ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setSelectedTier(tier.name)}
                aria-pressed={selectedTier === tier.name}
                aria-label={`Select ${tier.name} plan`}
              >
                {tier.price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedTier && (
        <div className="mt-12 rounded-lg border border-primary bg-primary/10 p-6 text-center text-primary-foreground">
          <p className="text-lg font-semibold">
            You selected the <span className="underline">{selectedTier}</span> plan.
          </p>
          <Button
            variant="ghost"
            className="mt-4"
            onClick={() => setSelectedTier(null)}
            aria-label="Clear selected plan"
          >
            Clear Selection <X className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
