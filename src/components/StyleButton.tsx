interface ButtonProps {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ type, children, className }: ButtonProps) => {
  
  const primaryStyle = 'text-yellow-500 underline  decoration-red-500 underline-offset-4 border-2 border-red-500 px-4 py-2 font-semibold text-lg rounded';
  const secondaryStyle = 'text-green-500 px-4 py-2 font-semibold text-lg rounded';

  const buttonStyle = type === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button className={` ${buttonStyle} ${className}`}>
      {children}
    </button>
  );
};

function StyleButton() {

  return (
    <>
      <div className="text-center border-2 w-1/4 p-5 rounded-xl flex-col items-center flex justify-center gap-3">
        <Button type="primary" className="w-full border-8">Hello !</Button>
        <Button type="secondary">Hello !</Button>
      </div>
    </>
  );
}

export default StyleButton;