export default function Container({ children } : {children: any}) {
  return (
    <div className="max-w-screen-md m-auto space-y-3 mt-12">
      {children}
    </div>
  );
}