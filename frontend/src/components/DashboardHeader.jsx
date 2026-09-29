import React from 'react'

const DashboardHeader = () => {
  return (
         <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm text-[#737373]">Good morning 👋</p>
            <h1 className="text-3xl font-semibold tracking-tight">
              Your day at a glance
            </h1>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEEBFF] text-sm font-semibold text-[#6D5DFB]">
            MK
          </div>
        </div>
  )
}

export default DashboardHeader
