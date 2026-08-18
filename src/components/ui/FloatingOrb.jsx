const FloatingOrb = ({ style }) => {
  return (
    <div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse"
      style={style}
    />
  );
};

export default FloatingOrb;
