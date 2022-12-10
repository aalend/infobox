export default function Container({ children, className }) {
  const containerClass = `container mx-auto px-4`;

  return <div className={`${containerClass} ${className ?? ''} px-`}>{children}</div>;
}
