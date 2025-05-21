import Image from 'next/image';

export default function CommitteeIcon({ committee, size=65 }) {
  const path = committee === 'acm' ? '/images/acm-logo-light.png' : `/images/diamonds/${committee}_diamond.svg`;

  return (
    <Image
      src={path}
      alt={`ACM ${committee} icon`}
      width={size}
      height={size}
    />
  );
}
