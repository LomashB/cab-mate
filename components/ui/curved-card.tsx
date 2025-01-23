import React from "react"

interface CurvedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "yellow" | "white"
  children: React.ReactNode
}

export function CurvedCard({ variant = "white", className, children, ...props }: CurvedCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 overflow-hidden ${
        variant === "blue" ? "bg-blue-900 text-white" :
        variant === "yellow" ? "bg-yellow-400" :
        "bg-white"
      } ${className}`}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 ${
          variant === "blue" ? "bg-blue-500" :
          variant === "yellow" ? "bg-yellow-300" :
          "bg-gray-100"
        }`}
      />
    </div>
  )
}

