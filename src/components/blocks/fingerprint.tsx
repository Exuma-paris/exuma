import Image from "next/image";

export function Fingerprint() {
  return (
    <div className="section-px pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-layout">
      <Image
        src="/thumb-print.png"
        alt=""
        aria-hidden
        width={1270}
        height={810}
        className="absolute right-(--section-gutter) bottom-0 hidden w-68 translate-x-[20%] select-none md:block lg:w-91 xl:w-104"
      />
    </div>
  );
}
