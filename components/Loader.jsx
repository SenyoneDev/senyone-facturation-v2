const Loader = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      <p className="text-center">Processing...</p>
    </div>
  );
};

export default Loader;
