'use client'

import { useState, useId } from 'react'
import { ROI_DEFAULTS } from '@/data/config'
import AnimatedCounter from '@/components/AnimatedCounter'

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
  const investmentBarHeight = Math.min(100, Math.max(10, (annualInvestment / maxVal) * 100))
  const grossBarHeight = Math.min(100, Math.max(10, (projectedGrossCommission / maxVal) * 100))
  const netBarHeight = Math.min(100, Math.max(10, (Math.max(0, netProfit) / maxVal) * 100))

  return (
    <section id="roi-calculator" className="section-padding bg-paper border-b border-[rgba(31,39,51,0.08)]">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brass/10 border border-brass/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
            <span className="font-public-sans text-xs font-semibold text-[#8B6332] uppercase tracking-wider">
              Interactive Return Model
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink-navy mb-4 font-fraunces">
            Calculate your pipeline ROI
          </h2>
          <p className="text-base md:text-lg text-slate font-public-sans">
            Adjust your expected deal sizes, conversion rates, and monthly appointment targets to project your annual return.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 panel-border bg-white p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(31,39,51,0.08)]">
              <h3 className="text-xl font-bold text-ink-navy font-fraunces">
                Deal &amp; Conversion Parameters
              </h3>
              <span className="text-xs font-semibold text-brass font-public-sans">Live Recalculation</span>
            </div>

            {/* Slider 1: Appointments per month */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={leadsId} className="text-sm font-bold text-charcoal font-public-sans">
                  Appointments Per Month
                </label>
                <span className="text-sm font-extrabold text-brass font-public-sans bg-brass/10 px-2.5 py-0.5 rounded-xs border border-brass/30">
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
                className="w-full h-2 bg-paper rounded-lg appearance-none cursor-pointer accent-brass"
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
                className="w-full px-4 py-2.5 border border-[rgba(31,39,51,0.18)] rounded-xs text-sm font-public-sans focus:border-brass focus:outline-hidden"
              />
            </div>

            {/* Grid 2-col inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={listingRateId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                  Lead-to-Listing Conversion (%)
                </label>
                <input
                  id={listingRateId}
                  type="number"
                  min={1}
                  max={50}
                  step={1}
                  value={leadToListingRate}
                  onChange={(e) => setLeadToListingRate(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-[rgba(31,39,51,0.18)] rounded-xs text-sm font-public-sans focus:border-brass focus:outline-hidden"
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
                  className="w-full px-3 py-2 border border-[rgba(31,39,51,0.18)] rounded-xs text-sm font-public-sans focus:border-brass focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[rgba(31,39,51,0.08)]">
              <div>
                <label htmlFor={dealValueId} className="block text-xs font-bold text-charcoal mb-1 font-public-sans">
                  Average Deal Enterprise Value ($)
                </label>
                <input
                  id={dealValueId}
                  type="number"
                  min={100000}
                  max={25000000}
                  step={50000}
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-[rgba(31,39,51,0.18)] rounded-xs text-sm font-public-sans focus:border-brass focus:outline-hidden"
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
                  className="w-full px-3 py-2 border border-[rgba(31,39,51,0.18)] rounded-xs text-sm font-public-sans focus:border-brass focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Output Visual Box (5 Cols) */}
          <div className="lg:col-span-5 panel-border-brass bg-ink-navy text-paper p-6 md:p-8 space-y-6 shadow-xl rounded-sm">
            <div>
              <p className="eyebrow uppercase text-brass text-xs font-bold tracking-wider mb-1 font-public-sans">
                Projected Output
              </p>
              <h3 className="text-2xl font-bold font-fraunces text-white">
                Annual Financial Impact
              </h3>
            </div>

            {/* Visual SVG Bar Comparison Graphic */}
            <div className="p-4 bg-[#070B14] rounded-xs border border-white/10">
              <p className="text-[11px] font-semibold text-paper/70 font-public-sans uppercase mb-3">
                Investment vs Revenue Comparison
              </p>
              <div className="flex items-end justify-between gap-4 h-28 pt-2 px-2 border-b border-white/10">
                
                {/* Spend Bar */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-bold text-slate">{formatCurrency(annualInvestment)}</span>
                  <div
                    className="w-full bg-slate/40 rounded-t-xs transition-all duration-300"
                    style={{ height: `${investmentBarHeight}%` }}
                  />
                  <span className="text-[9px] font-semibold text-paper/60 uppercase">Spend</span>
                </div>

                {/* Gross Commission Bar */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-bold text-brass">{formatCurrency(projectedGrossCommission)}</span>
                  <div
                    className="w-full bg-brass/80 rounded-t-xs transition-all duration-300"
                    style={{ height: `${grossBarHeight}%` }}
                  />
                  <span className="text-[9px] font-semibold text-brass uppercase">Gross</span>
                </div>

                {/* Net Profit Bar */}
                <div className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-bold text-emerald-400">{formatCurrency(netProfit)}</span>
                  <div
                    className="w-full bg-emerald-500/80 rounded-t-xs transition-all duration-300"
                    style={{ height: `${netBarHeight}%` }}
                  />
                  <span className="text-[9px] font-semibold text-emerald-400 uppercase">Net</span>
                </div>

              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-white/10">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-paper/70 font-public-sans">Deals Closed / Year</span>
                <span className="text-sm font-bold font-public-sans text-paper">
                  {annualDeals.toFixed(1)} deals
                </span>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-paper/70 font-public-sans mb-1">Net Projected Profit</p>
                <p className="text-3xl sm:text-4xl font-extrabold font-public-sans text-white tracking-tight roi-output-anim">
                  {formatCurrency(netProfit)}
                </p>
              </div>

              {/* ROI Multiple Badge */}
              <div className="mt-4 p-4 bg-white/5 border border-brass/50 rounded-xs text-center">
                <p className="text-xs font-bold text-brass font-public-sans uppercase tracking-wider mb-1">
                  Return Multiple
                </p>
                <p className="text-3xl font-extrabold text-white font-public-sans">
                  {roiMultiple > 0 ? `${roiMultiple.toFixed(1)}x ROI` : '0.0x'}
                </p>
                <p className="text-[11px] text-paper/60 font-public-sans mt-1">
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
