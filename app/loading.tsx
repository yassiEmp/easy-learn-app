const Loading = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-between lg:p-24 md:p-16 p-4">
        <div className="container w-full h-full mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Choisissez un thème
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  overflow-y-auto">
            {Array.from({ length: 40 }).map((_, index) => (
              <div key={index} className="w-full text-lg py-4 overflow-hidden text-primary-foreground shadow hover:bg-primary/90 rounded-sm animate-pulse bg-primary/10" />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Loading;
