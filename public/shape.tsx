export default function Shape() {
  return (
    <svg
      viewBox="0 0 160 240"
      className="absolute top-0 left-0 overflow-visible w-[160px] h-[240px] md:w-[210px] md:h-[270px] lg:w-[240px] lg:h-[300px] z-0"
      preserveAspectRatio="none"
    >
      <path
        d="M 0,60 C 0,50 8,42 16,38 L 144,0 Q 160,0 160,16 L 160,224 Q 160,240 144,240 L 16,240 Q 0,240 0,224 Z"
        className="fill-primary"
      />
    </svg>
  );
}