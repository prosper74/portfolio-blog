import Image from 'next/image';

export function LoaderImage({ height, width }) {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/prosper-dev/image/upload/v1647127499/eclipse_qljx8s.svg"
        alt="Loader"
        width={width}
        height={height}
      />
    </div>
  );
}
