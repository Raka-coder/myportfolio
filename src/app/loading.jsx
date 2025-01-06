import React from "react"

function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-50 via-blue-50 to-slate-50 z-50">
        <div className="w-10 h-10 border-4 border-t-blue-600 border-gray-300 rounded-full animate-spin" />
      </div>
    </>
  )
}

export default Loading
