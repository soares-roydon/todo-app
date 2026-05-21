function Input({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <>
      <input type={type} placeholder={placeholder} className="border border-zinc-200 px-2 py-1 focus:outline-zinc-300 placeholder:text-sm rounded text-zinc-500 w-full hover:border-zinc-300" />
    </>
  );
}

export default Input;
