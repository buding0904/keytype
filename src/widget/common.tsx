import { FC } from 'react'

const ICONS = import.meta.glob('../assets/icons/*', { eager: true })

export const Icon: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const mod = ICONS[`../assets/icons/${name}.svg`] as any

  return (
    <img
      src={mod.default}
      className={className}
    />
  )
}
