function Input({ type, placeholder, onChange }: { type: string; placeholder: string, onChange: (e: any) => void }) {
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={onChange} className="border border-zinc-200 px-2 py-1 focus:outline-zinc-300 placeholder:text-sm rounded text-zinc-500 w-full hover:border-zinc-300" />
    </>
  );
}

export default Input;
