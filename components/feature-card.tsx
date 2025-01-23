interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
  }
  
  export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
      <div className="group rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-900 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    )
  }
  
  