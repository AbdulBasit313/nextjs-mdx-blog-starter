import { FC } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <div className="my-7">
    <h2 className="text-2xl font-bold text-primary">{title}</h2>
    {subtitle && <p className="text-secondary">{subtitle}</p>}
  </div>
)

export default SectionHeading
