export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <style>
        {`
          nextjs-portal,
          [data-nextjs-toast],
          [data-nextjs-dev-tools-button],
          [data-nextjs-build-indicator] {
            display: none !important;
          }
        `}
      </style>
    </>
  );
}
