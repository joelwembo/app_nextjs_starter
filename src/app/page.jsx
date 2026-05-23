'use client';

import { useState } from 'react';

const FEATURES = [
  {
    title: 'App Router',
    desc: 'File-system based routing with layouts, loading states, and error handling.',
    icon: '📂',
    color: '#8b5cf6',
  },
  {
    title: 'Server Components',
    desc: 'React Server Components for faster page loads and smaller bundles.',
    icon: '🚀',
    color: '#06b6d4',
  },
  {
    title: 'API Routes',
    desc: 'Build APIs directly in your Next.js app with route handlers.',
    icon: '🔌',
    color: '#10b981',
  },
  {
    title: 'Tailwind CSS v4',
    desc: 'Utility-first CSS framework with zero-config setup.',
    icon: '🎨',
    color: '#f59e0b',
  },
  {
    title: 'Image Optimization',
    desc: 'Automatic image optimization with next/image component.',
    icon: '🖼️',
    color: '#ef4444',
  },
  {
    title: 'FastAPI Backend',
    desc: 'Connected to your VA Studio FastAPI backend via API proxy.',
    icon: '⚡',
    color: '#ec4899',
  },
];

function FeatureCard({ feature, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-xl cursor-default"
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: hovered ? `0 0 40px ${feature.color}15` : 'none',
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${feature.color}15` }}
      >
        {feature.icon}
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
    </div>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-800/50 text-xs text-violet-400 font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Next.js 15 + React 19
          </div>

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-4">
            Build with{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Next.js
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
            A production-ready Next.js starter scaffolded by VA Studio.
            App Router, Tailwind CSS v4, and your FastAPI backend — all wired up.
          </p>

          {/* Interactive counter */}
          <div className="inline-flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4 mb-16">
            <button
              onClick={() => setCount(c => c - 1)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-lg font-medium transition-colors flex items-center justify-center"
            >
              -
            </button>
            <div className="text-center">
              <div className="text-3xl font-bold tabular-nums" style={{ color: '#8b5cf6' }}>
                {count}
              </div>
              <div className="text-[10px] text-gray-600 uppercase tracking-wider">Counter</div>
            </div>
            <button
              onClick={() => setCount(c => c + 1)}
              className="w-10 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-lg font-medium transition-colors flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">What&apos;s Included</h2>
          <p className="text-sm text-gray-500">Everything you need to build modern web applications</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-8 text-center">
        <p className="text-xs text-gray-600">
          Next.js 15 — Scaffolded by VA Studio
        </p>
      </div>
    </div>
  );
}
