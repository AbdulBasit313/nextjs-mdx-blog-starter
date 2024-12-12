import { FC } from 'react'

interface SectionHeadingProps {
  title: string[]
  subtitle?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <div className="my-7">
    <h2 className="text-2xl font-bold text-primary">
      {title[0]} <span className="text-theme">{title[1]}</span>
    </h2>
    {subtitle && <p className="text-secondary">{subtitle}</p>}
  </div>
)

export default SectionHeading
