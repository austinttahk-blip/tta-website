import Image from 'next/image'
import logoImage from '@/images/logos/logo.svg'
import logoDarkImage from '@/images/logos/logo-dark.svg'

export function Logo({ visible, enableColorTransition = true, ...props }) {
  const logoSrc = enableColorTransition
    ? (visible ? logoImage : logoDarkImage)
    : logoImage

  return (
    <Image
      src={logoSrc}
      alt="TTA Logo"
      width={32}
      height={32}
      {...props}
    />
  )
}
