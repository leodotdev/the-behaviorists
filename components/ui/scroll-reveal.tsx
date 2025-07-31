'use client';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
}: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}