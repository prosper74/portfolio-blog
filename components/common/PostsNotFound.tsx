import Image from 'next/image';

export default function PostsNotFound() {
  return (
    <div className="font-mono text-center mt-8 flex flex-col items-center">
      <h4 className="font-semibold text-2xl md:text-4xl">Ooo Oooh!</h4>
      <Image
        src="/assets/error.gif"
        alt="error gif"
        width={300}
        height={300}
        className="rounded-lg my-6"
      />
      <p className="text-lg">Unable to fetch Posts. Try again later</p>
    </div>
  );
}
