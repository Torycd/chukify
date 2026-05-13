function Button({ children, onFunc }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
      onClick={onFunc}
    >
      {children}
    </button>
  );
}

export default Button;
