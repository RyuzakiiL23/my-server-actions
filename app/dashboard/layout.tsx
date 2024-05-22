export default function RootLayout({
  children,
  createTodo,
  modifyTodo,
}: Readonly<{
  children: React.ReactNode;
  createTodo: React.ReactNode;
  modifyTodo: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-slate-200 min-h-screen h-full">
        <div className="flex flex-col h-full">
          <div>{children}</div>
          <div className="flex w-full h-full flex-1">
            <div className="flex flex-col items-center w-[470px] h-full border-black border-r-2 px-2 overflow-auto">
              {modifyTodo}
            </div>
            <div className="flex justify-around flex-col items-center w-full h-full">
              {createTodo}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
