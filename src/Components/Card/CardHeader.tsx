interface CardHeaderProps {
  title: string,
} 


export function CardHeader ({ title }: CardHeaderProps) {
  return (
    <div className="font-mono font-bold">
      { title }
    </div>
  );
}