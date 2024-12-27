import ShowIt from '../_components/showIt'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>
        Layout: <ShowIt />
      </div>
      {children}
    </>
  )
}
