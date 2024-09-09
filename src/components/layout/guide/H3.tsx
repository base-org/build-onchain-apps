export default function H3({
  id,
  children,
}: { id?: string; children: string }) {
  return (
    <h3 id={id} className="mt-8 scroll-mt-28 font-medium text-4xl text-white">
      {children}
    </h3>
  );
}
