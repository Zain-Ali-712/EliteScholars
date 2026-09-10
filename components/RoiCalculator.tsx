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
    <section id="roi-calculator" className="py-12 md:py-16 bg-paper border-b border-slate-200/80">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brass/10 border border-brass/25 text-brass text-[10px] sm:text-xs font-bold tracking-widest uppercase font-public-sans mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brass" />
            Interactive Return Model
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-fraunces text-ink-navy mb-2.5">
            Calculate your <span className="text-brass">pipeline</span> ROI
          </h2>
          <p className="text-xs sm:text-sm text-slate font-public-sans max-w-xl mx-auto">
            Adjust expected deal sizes, conversion rates, and monthly appointment targets to project your annual return.
          </p>
        </div>

        {/* Outer Framed Container */}
        <div className="bg-[#F4F6F9] rounded-[28px] p-4 sm:p-6 md:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Controls Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-ink-navy text-brass flex items-center justify-center border border-brass/30">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-ink-navy font-fraunces">
                    Deal &amp; Conversion Parameters
                  </h3>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-brass font-public-sans bg-brass/10 px-2.5 py-0.5 rounded-full border border-brass/30">
                  Live Model
                </span>
              </div>

              {/* Slider: Appointments per month */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor={leadsId} className="font-bold text-charcoal font-public-sans">
                    Appointments Per Month
                  </label>
                  <span className="font-bold text-brass font-public-sans bg-brass/10 px-2.5 py-0.5 rounded-full border border-brass/25 text-xs">
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
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brass"
                />
              </div>

              {/* Cost per appointment */}
              <div>
                <label htmlFor={costId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                  Cost Per Appointment ($)
                </label>
                <input
                  id={costId}
                  type="number"
                  min={100}
                  max={2000}
                  step={25}
                  value={costPerLead}
                  onChange={(e) => setCostPerLead(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-public-sans focus:border-brass focus:outline-hidden transition-colors bg-slate-50/50"
                />
              </div>

              {/* Grid 2-col inputs: Conversion rates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor={listingRateId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                    Lead-to-Listing Rate (%)
                  </label>
                  <input
                    id={listingRateId}
                    type="number"
                    min={1}
                    max={50}
                    step={1}
                    value={leadToListingRate}
                    onChange={(e) => setLeadToListingRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-public-sans focus:border-brass focus:outline-hidden transition-colors bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor={closeRateId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                    Listing-to-Close Rate (%)
                  </label>
                  <input
                    id={closeRateId}
                    type="number"
                    min={5}
                    max={100}
                    step={5}
                    value={listingToCloseRate}
                    onChange={(e) => setListingToCloseRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-public-sans focus:border-brass focus:outline-hidden transition-colors bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Grid 2-col inputs: Enterprise values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div>
                  <label htmlFor={dealValueId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                    Avg Deal Enterprise Value ($)
                  </label>
                  <input
                    id={dealValueId}
                    type="number"
                    min={100000}
                    max={25000000}
                    step={50000}
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-public-sans focus:border-brass focus:outline-hidden transition-colors bg-slate-50/50"
                  />
                </div>

                <div>
                  <label htmlFor={commissionId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                    Broker Commission Rate (%)
                  </label>
                  <input
                    id={commissionId}
                    type="number"
                    min={1}
                    max={25}
                    step={0.5}
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-public-sans focus:border-brass focus:outline-hidden transition-colors bg-slate-50/50"
                  />
                </div>
              </div>

            </div>

            {/* Output Visual Box (5 Cols) */}
            <div className="lg:col-span-5 bg-ink-navy text-paper p-5 sm:p-6 rounded-2xl border border-brass/30 shadow-xl relative overflow-hidden flex flex-col justify-between">
              
              <div aria-hidden="true" className="absolute -right-16 -top-16 w-48 h-48 bg-brass/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="eyebrow uppercase text-brass text-[10px] font-bold tracking-widest font-public-sans">
                      Projected Output
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-fraunces text-white">
                      Annual Financial Impact
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brass/10 border border-brass/30 text-brass flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                {/* Visual Bar Comparison Graphic */}
                <div className="p-3 bg-[#0c1938] rounded-xl border border-white/10 relative z-10">
                  <p className="text-[10px] font-bold text-brass uppercase tracking-wider font-public-sans mb-2">
                    Investment vs Revenue Breakdown
                  </p>
                  <div className="flex items-end justify-between gap-3 h-20 pt-1 px-1 border-b border-white/10">
                    
                    {/* Spend Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[9px] font-bold text-slate-300">{formatCurrency(annualInvestment)}</span>
                      <div
                        className="w-full bg-slate-400/50 rounded-t-xs transition-all duration-300"
                        style={{ height: `${investmentBarHeight}%` }}
                      />
                      <span className="text-[8px] font-bold text-slate-400 uppercase">Spend</span>
                    </div>

                    {/* Gross Commission Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[9px] font-bold text-brass">{formatCurrency(projectedGrossCommission)}</span>
                      <div
                        className="w-full bg-brass/80 rounded-t-xs transition-all duration-300"
                        style={{ height: `${grossBarHeight}%` }}
                      />
                      <span className="text-[8px] font-bold text-brass uppercase">Gross</span>
                    </div>

                    {/* Net Profit Bar */}
                    <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[9px] font-bold text-emerald-400">{formatCurrency(netProfit)}</span>
                      <div
                        className="w-full bg-emerald-500/80 rounded-t-xs transition-all duration-300"
                        style={{ height: `${netBarHeight}%` }}
                      />
                      <span className="text-[8px] font-bold text-emerald-400 uppercase">Net</span>
                    </div>

                  </div>
                </div>

                {/* Metric Summary Rows */}
                <div className="space-y-2 pt-1 border-t border-white/10">
                  <div className="flex justify-between items-baseline text-xs font-public-sans">
                    <span className="text-paper/70">Deals Closed / Year</span>
                    <span className="font-bold text-paper">
                      {annualDeals.toFixed(1)} deals
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <p className="text-[11px] text-paper/70 font-public-sans mb-0.5">Net Projected Profit</p>
                    <p className="text-2xl sm:text-3xl font-extrabold font-public-sans text-white tracking-tight">
                      {formatCurrency(netProfit)}
                    </p>
                  </div>
                </div>

              </div>

              {/* ROI Multiple Pill Badge */}
              <div className="mt-4 p-3 bg-white/5 border border-brass/40 rounded-xl text-center relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brass font-public-sans uppercase tracking-wider">
                    Return Multiple
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white font-public-sans bg-brass/20 px-2.5 py-0.5 rounded-full border border-brass/40">
                    {roiMultiple > 0 ? `${roiMultiple.toFixed(1)}x ROI` : '0.0x'}
                  </span>
                </div>
                <p className="text-[10px] text-paper/60 font-public-sans mt-1 text-left">
                  For every $1 invested, projected return is ${roiMultiple.toFixed(2)}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
