'use client'

import { useState, useId } from 'react'
import { ROI_DEFAULTS } from '@/data/config'

export default function RoiCalculator() {
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(ROI_DEFAULTS.leadsPerMonth)
  const [costPerLead, setCostPerLead] = useState<number>(ROI_DEFAULTS.costPerLead)
  const [leadToListingRate, setLeadToListingRate] = useState<number>(ROI_DEFAULTS.leadToListingRate)
  const [listingToCloseRate, setListingToCloseRate] = useState<number>(ROI_DEFAULTS.listingToCloseRate)
  const [avgDealValue, setAvgDealValue] = useState<number>(ROI_DEFAULTS.avgDealValue)
  const [commissionRate, setCommissionRate] = useState<number>(ROI_DEFAULTS.commissionRate)

  const leadsId = useId()
  const costId = useId()
  const listingRateId = useId()
  const closeRateId = useId()
  const dealValueId = useId()
  const commissionId = useId()

  // Calculated metrics
  const annualLeads = Math.max(1, leadsPerMonth) * 12
  const annualInvestment = annualLeads * Math.max(0, costPerLead)
  
  const annualListings = annualLeads * (Math.max(0, Math.min(100, leadToListingRate)) / 100)
  const annualDeals = annualListings * (Math.max(0, Math.min(100, listingToCloseRate)) / 100)
  
  const grossCommissionPerDeal = Math.max(0, avgDealValue) * (Math.max(0, Math.min(100, commissionRate)) / 100)
  const projectedGrossCommission = annualDeals * grossCommissionPerDeal
  const netProfit = projectedGrossCommission - annualInvestment
  const roiMultiple = annualInvestment > 0 ? (projectedGrossCommission / annualInvestment) : 0

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(Math.max(0, val))
  }

  // Visual SVG Bar Graph Height Percentages
  const maxVal = Math.max(projectedGrossCommission, annualInvestment, 1)
  const investmentBarHeight = Math.min(100, Math.max(12, (annualInvestment / maxVal) * 100))
  const grossBarHeight = Math.min(100, Math.max(12, (projectedGrossCommission / maxVal) * 100))
  const netBarHeight = Math.min(100, Math.max(12, (Math.max(0, netProfit) / maxVal) * 100))

  return (
    <section id="roi-calculator" className="py-14 md:py-18 bg-gradient-to-b from-white via-purple-50/15 to-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Playful Ambient Glows */}
      <div aria-hidden="true" className="absolute -left-20 top-1/3 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute -right-20 bottom-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Centered Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Calculate Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">Pipeline ROI</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Adjust expected deal sizes, conversion rates, and monthly appointment targets to project your annual return.
          </p>
        </div>

        {/* Outer Framed Container */}
        <div className="bg-gradient-to-br from-[#F8FAFF] via-white to-blue-50/20 rounded-3xl p-5 sm:p-7 md:p-9 border-2 border-blue-200/80 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            
            {/* Controls Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/80 shadow-sm space-y-5 flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Deal &amp; Conversion Parameters
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Fine-tune your commission assumptions</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                  <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Live Model</span>
                </span>
              </div>

              {/* Slider: Appointments per month */}
              <div className="space-y-2 p-3.5 bg-blue-50/40 rounded-2xl border border-blue-100">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={leadsId} className="font-bold text-slate-800 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Appointments Per Month</span>
                  </label>
                  <span className="font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-0.5 rounded-full text-xs shadow-xs">
                    {leadsPerMonth} appointments/mo
                  </span>
                </div>
                <input
                  id={leadsId}
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={leadsPerMonth}
                  onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                  className="w-full h-2.5 bg-blue-200/60 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              {/* Cost per appointment */}
              <div>
                <label htmlFor={costId} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cost Per Appointment ($)</span>
                </label>
                <input
                  id={costId}
                  type="number"
                  min={100}
                  max={2000}
                  step={25}
                  value={costPerLead}
                  onChange={(e) => setCostPerLead(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 border border-slate-200 border-l-4 border-l-blue-500 rounded-xl text-xs sm:text-sm font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all bg-slate-50/50"
                />
              </div>

              {/* Grid 2-col inputs: Conversion rates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={listingRateId} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                    <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lead-to-Listing Rate (%)</span>
                  </label>
                  <input
                    id={listingRateId}
                    type="number"
                    min={1}
                    max={50}
                    step={1}
                    value={leadToListingRate}
                    onChange={(e) => setLeadToListingRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-200 border-l-4 border-l-purple-500 rounded-xl text-xs sm:text-sm font-semibold focus:border-purple-500 focus:ring-2 focus:ring-purple-100 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor={closeRateId} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                    <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Listing-to-Close Rate (%)</span>
                  </label>
                  <input
                    id={closeRateId}
                    type="number"
                    min={5}
                    max={100}
                    step={5}
                    value={listingToCloseRate}
                    onChange={(e) => setListingToCloseRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-200 border-l-4 border-l-indigo-500 rounded-xl text-xs sm:text-sm font-semibold focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Grid 2-col inputs: Enterprise values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <label htmlFor={dealValueId} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
                    </svg>
                    <span>Avg Deal Enterprise Value ($)</span>
                  </label>
                  <input
                    id={dealValueId}
                    type="number"
                    min={100000}
                    max={25000000}
                    step={50000}
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-200 border-l-4 border-l-amber-500 rounded-xl text-xs sm:text-sm font-semibold focus:border-amber-500 focus:ring-2 focus:ring-amber-100 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor={commissionId} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Broker Commission Rate (%)</span>
                  </label>
                  <input
                    id={commissionId}
                    type="number"
                    min={1}
                    max={25}
                    step={0.5}
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-slate-200 border-l-4 border-l-emerald-500 rounded-xl text-xs sm:text-sm font-semibold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 focus:outline-hidden transition-all bg-slate-50/50"
                  />
                </div>
              </div>

            </div>

            {/* Output Visual Box (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white via-purple-50/25 to-indigo-50/30 border-2 border-purple-300 rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-500/10 relative overflow-hidden flex flex-col justify-between">
              
              <div className="relative z-10 space-y-5">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-purple-700 uppercase tracking-wider bg-purple-100/90 px-3 py-0.5 rounded-full border border-purple-300">
                      <svg className="w-3 h-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Projected Output</span>
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                      Annual Financial Impact
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Visual Bar Comparison Graphic */}
                <div className="p-4 bg-white/90 border-2 border-purple-100 rounded-2xl relative z-10 shadow-sm">
                  <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-3">
                    Investment vs Revenue Breakdown
                  </p>
                  <div className="flex items-end justify-between gap-4 h-28 pt-2 px-2 border-b border-slate-200">
                    
                    {/* Spend Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[10px] font-bold text-slate-500">{formatCurrency(annualInvestment)}</span>
                      <div
                        className="w-full bg-slate-300 rounded-t-lg transition-all duration-300"
                        style={{ height: `${investmentBarHeight}%` }}
                      />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Spend</span>
                    </div>

                    {/* Gross Commission Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[10px] font-extrabold text-purple-700">{formatCurrency(projectedGrossCommission)}</span>
                      <div
                        className="w-full bg-gradient-to-t from-purple-600 via-indigo-600 to-blue-500 rounded-t-lg transition-all duration-300 shadow-sm"
                        style={{ height: `${grossBarHeight}%` }}
                      />
                      <span className="text-[9px] font-extrabold text-purple-700 uppercase tracking-wider">Gross</span>
                    </div>

                    {/* Net Profit Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[10px] font-extrabold text-emerald-700">{formatCurrency(netProfit)}</span>
                      <div
                        className="w-full bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t-lg transition-all duration-300 shadow-sm"
                        style={{ height: `${netBarHeight}%` }}
                      />
                      <span className="text-[9px] font-extrabold text-emerald-700 uppercase tracking-wider">Net</span>
                    </div>

                  </div>
                </div>

                {/* Metric Summary Rows */}
                <div className="space-y-2.5 pt-2 border-t border-purple-100">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm">
                    <span className="text-slate-600 font-medium">Deals Closed / Year</span>
                    <span className="font-extrabold text-purple-800 bg-purple-100/70 px-2.5 py-0.5 rounded-lg border border-purple-200">
                      {annualDeals.toFixed(1)} deals
                    </span>
                  </div>

                  <div className="pt-2 border-t border-purple-100">
                    <p className="text-xs text-slate-500 font-medium mb-1">Net Projected Profit</p>
                    <p className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-700 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                      {formatCurrency(netProfit)}
                    </p>
                  </div>
                </div>

              </div>

              {/* ROI Multiple Pill Badge */}
              <div className="mt-5 p-4 bg-gradient-to-r from-purple-100/70 via-indigo-50 to-emerald-100/70 border-2 border-emerald-300 rounded-2xl text-center relative z-10 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Projected Multiple</span>
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-emerald-800 bg-white px-3 py-0.5 rounded-full border border-emerald-300 shadow-xs">
                    {roiMultiple > 0 ? `${roiMultiple.toFixed(1)}x ROI` : '0.0x'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 text-left font-medium">
                  For every $1 invested, projected return is <span className="font-bold text-emerald-700">${roiMultiple.toFixed(2)}</span> in commission.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
