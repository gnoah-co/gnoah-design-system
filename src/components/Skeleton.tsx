type SkeletonProps = {
  variant?: 'text' | 'title' | 'circle' | 'rect'
  width?: string | number
  height?: string | number
}

function Skeleton({ variant = 'text', width, height }: SkeletonProps) {
  const baseClass = 'skeleton'
  const variantClass = variant ? `skeleton--${variant}` : ''

  const style: React.CSSProperties = {
    width: width || (variant === 'circle' ? 48 : '100%'),
    height:
      height ||
      (variant === 'circle' ? 48 : variant === 'title' ? 32 : variant === 'rect' ? 200 : 16),
  }

  return <div className={`${baseClass} ${variantClass}`} style={style} />
}

export default Skeleton
