type BadgeProps = {
  label: string
  tone?: 'default' | 'primary'
}

function Badge({ label, tone = 'default' }: BadgeProps) {
  return (
    <span className={`badge ${tone === 'primary' ? 'badge--primary' : ''}`}>
      {label}
    </span>
  )
}

export default Badge
