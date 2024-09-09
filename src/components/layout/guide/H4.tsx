import Hr from './Hr';

export default function H4({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h4 className="font-normal text-white text-xl">{children}</h4>
      <Hr />
    </>
  );
}
