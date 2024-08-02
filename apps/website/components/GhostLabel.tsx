const GhostLabel = ({ text }: { text: string }) => {
  return (
    <p className="absolute -inset-y-[130px] -inset-x-[30px]  md:-inset-x-[50px] flex text-[150px] font-bold -z-0 opacity-10 font-anton">
      {text}
    </p>
  );
};

export default GhostLabel;
