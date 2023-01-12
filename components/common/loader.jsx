import Image from 'next/image';

export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="https://res.cloudinary.com/prosper-dev/image/upload/v1647127499/eclipse_qljx8s.svg"
        alt="Loader"
        width={100}
        height={100}
        className="m-auto"
      />
    </div>
  );
}
