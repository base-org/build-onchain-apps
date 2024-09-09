export default function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="my-4 list-disc pl-12 font-normal text-base text-white">
      {children}
    </ul>
  );
}
