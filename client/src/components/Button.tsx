function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return (
    <>
      <div className="flex justify-center bg-orange-500 text-white rounded-md text-sm py-2 hover:bg-orange-600 cursor-pointer" onClick={onClick}>
        {children}
      </div>
    </>
  );
}

export default Button;
