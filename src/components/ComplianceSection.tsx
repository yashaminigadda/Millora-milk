import React from 'react';
import { ShieldAlert, CheckCircle, Scale, FileCheck, Info, AlertTriangle } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#071A2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E8C66A] uppercase tracking-wider mb-3">
            <span>Regulatory Responsibility</span>
            <span aria-hidden="true">·</span>
            <span>Food Safety Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#FFFDF7]">
            Safety & Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F8F7F2]/80 leading-relaxed max-w-xl">
            Milk is a vital daily food product. Operating a responsible milk business demands strict adherence to local food safety and handling protocols.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7BCB9A]/20 flex items-center justify-center text-[#7BCB9A] mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#FFFDF7] font-heading mb-2">
                FSSAI Framework
              </h3>
              <p className="text-sm text-[#F8F7F2]/75 leading-relaxed">
                Food Safety and Standards Authority of India (FSSAI) registration/licensing guidelines govern milk handling, storage, and direct distribution.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#7BCB9A] font-semibold">
              Statutory Food Safety
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8C66A]/20 flex items-center justify-center text-[#E8C66A] mb-6">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#FFFDF7] font-heading mb-2">
                Cold-Chain Hygiene
              </h3>
              <p className="text-sm text-[#F8F7F2]/75 leading-relaxed">
                Raw milk must be collected clean, maintained below safe temperature thresholds during transit, and delivered without unhygienic delays.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E8C66A] font-semibold">
              Temperature Guarded
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#FFFDF7] font-heading mb-2">
                Food-Grade Packaging
              </h3>
              <p className="text-sm text-[#F8F7F2]/75 leading-relaxed">
                Packaging materials must be virgin food-grade polymer certified for dairy contact, with tamper-evident sealing and batch tracking.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-white/70 font-semibold">
              Tamper Evident
            </div>
          </div>
        </div>

        {/* Mandatory Responsible Regulatory Notice */}
        <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border border-amber-400/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-[#E8C66A] flex items-center justify-center shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                Verify Current Requirements Before Launch
              </h4>
              <p className="text-sm text-[#F8F7F2]/80 mt-1 max-w-2xl leading-relaxed">
                Registration/licensing requirements depend on the business activity, scale and applicable regulations. Entrepreneurs and route operators must consult official local food-safety portals to secure necessary statutory permissions prior to commercial dispatch.
              </p>
            </div>
          </div>

          <div className="shrink-0 bg-white/10 px-4 py-2 rounded-xl text-xs font-mono text-[#E8C66A] border border-white/15">
            FSSAI / Municipal Guidelines
          </div>
        </div>
      </div>
    </section>
  );
};
