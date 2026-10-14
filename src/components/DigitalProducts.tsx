import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { ShoppingBag, ArrowUpRight, ExternalLink } from 'lucide-react';

export const DigitalProducts: React.FC = () => {
  const { digitalProducts } = PORTFOLIO_DATA;

  return (
    <section id="products" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                Creator Economy & Marketplace
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
              DESIGNING BEYOND THE WORKPLACE
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
              Commercial digital templates, minimalist printable wall decor, fitness journals, and presentation frameworks crafted for online creators, indie businesses, and digital-product storefronts.
            </p>
          </div>

          {/* Direct Marketplace Links */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-slate-400">Storefronts:</span>
            {['Etsy', 'Gumroad', 'SuperProfile'].map((platform) => (
              <a
                key={platform}
                href={`#${platform.toLowerCase()}-store`}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Store link placeholder for [${platform.toUpperCase()} URL]. Configure your live shop link in portfolioData.ts.`);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F172A] border border-slate-800 hover:border-[#2DD4BF]/50 text-xs font-mono text-slate-300 hover:text-[#2DD4BF] transition-all"
              >
                <span>{platform}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#2DD4BF]/5 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Mockup */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#0B1220] mb-5 border border-slate-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Platform chip */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0B1220]/90 border border-slate-800 text-[10px] font-mono font-semibold text-[#2DD4BF]">
                    {product.platform}
                  </div>
                </div>

                {/* Category & Title */}
                <p className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] mb-1.5">
                  {product.category}
                </p>
                <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#2DD4BF] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div>
                {/* Unboxed tags */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-slate-400 pt-4 border-t border-slate-800/80 mb-4">
                  {product.tags.map((tag, tIdx) => (
                    <span key={tag}>
                      {tag}
                      {tIdx < product.tags.length - 1 && <span className="text-slate-700 ml-2" aria-hidden="true">·</span>}
                    </span>
                  ))}
                </div>

                {/* Explore Action Button */}
                <button
                  type="button"
                  onClick={() => {
                    alert(`Store link placeholder: [${product.platform.toUpperCase()} URL]. Configure your live shop link in portfolioData.ts.`);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B1220] hover:bg-slate-800 border border-slate-800 hover:border-[#2DD4BF]/50 text-xs font-mono font-medium text-slate-200 hover:text-[#2DD4BF] transition-all"
                >
                  <ShoppingBag size={14} className="text-[#2DD4BF]" />
                  <span>Explore on {product.platform}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Catalog Footer Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#131E33] to-[#0F172A] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-1">
              Custom Template & Creative Commission Requests
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Need custom Canva templates, enterprise presentation themes, or branded fitness assets?
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2DD4BF] text-[#0B1220] text-xs font-bold uppercase tracking-wider hover:bg-[#34E0C4] transition-colors"
          >
            <span>Commission A Template</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
