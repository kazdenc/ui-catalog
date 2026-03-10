export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`nextjs-portal { display: none !important; }`}</style>
      <div className="h-svh w-svw overflow-hidden">
        {children}
      </div>
    </>
  )
}
