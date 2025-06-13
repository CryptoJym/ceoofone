'use client';

import React from 'react';
import { HeroButton, HeroCard, HeroHeader, HeroAvatar, HeroStat } from '@h3ro-dev/ofone-ui';

export default function SharedComponentsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <HeroHeader 
          title="CEO of One"
          subtitle="Shared Components Showcase"
          variant="center"
        />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <HeroButton variant="primary">Primary Action</HeroButton>
            <HeroButton variant="secondary">Secondary Action</HeroButton>
            <HeroButton variant="outline">Outline Style</HeroButton>
            <HeroButton variant="ghost">Ghost Button</HeroButton>
            <HeroButton variant="destructive">Destructive</HeroButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HeroCard 
              title="Strategic Vision"
              description="Set company direction with AI-powered strategic planning and forecasting tools"
              ctaText="Create Vision"
            />
            <HeroCard 
              title="Executive Dashboard"
              description="Real-time insights and KPIs for executive decision-making and company oversight"
              ctaText="View Dashboard"
            />
            <HeroCard 
              title="Market Intelligence"
              description="Competitive analysis and market trends to stay ahead of industry disruptions"
              ctaText="Analyze Market"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <HeroStat 
              label="Revenue Growth"
              value="$12.4M"
              trend={{ value: 23, isPositive: true }}
            />
            <HeroStat 
              label="Market Share"
              value="34%"
              trend={{ value: 8, isPositive: true }}
            />
            <HeroStat 
              label="Operating Margin"
              value="18.5%"
              trend={{ value: 2.3, isPositive: true }}
            />
            <HeroStat 
              label="NPS Score"
              value="72"
              trend={{ value: 5, isPositive: true }}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Avatars</h2>
          <div className="flex items-center gap-6">
            <HeroAvatar 
              name="CEO User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=CEO"
              size="sm"
            />
            <HeroAvatar 
              name="CEO User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=CEO"
              size="md"
            />
            <HeroAvatar 
              name="CEO User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=CEO"
              size="lg"
            />
            <HeroAvatar 
              name="CEO"
              size="lg"
            />
          </div>
        </section>

        <section className="text-center py-12">
          <HeroHeader 
            title="Ready to Lead Your Company of One?"
            subtitle="Leverage the power of unified components across your entire executive suite"
            variant="center"
          />
          <div className="mt-8">
            <HeroButton variant="primary" size="lg">
              Start Your CEO Journey
            </HeroButton>
          </div>
        </section>
      </div>
    </div>
  );
}