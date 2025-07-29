const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full mt-5 min-h-fit flex items-center justify-center my-5">
      {children}
    </div>
  );
};

export default AuthContainer;
