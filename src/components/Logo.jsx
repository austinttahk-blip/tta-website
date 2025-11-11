import Image from 'next/image'
import logoImage from '@/images/logos/logo.png'

export function Logo(props) {
  return (
    <Image
      src={logoImage}
      alt="TTA Logo"
      width={32}
      height={32}
      {...props}
    />
  )
}
