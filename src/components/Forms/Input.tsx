interface InputInterface {
  title: string;
  value: string;
  type: string;
  id?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ title, value, type, id, onChange }: InputInterface) {
  return (
    <>
      <label htmlFor={`${title}-${id}`}>{title}: </label>
      <input type={type} value={value} onChange={onChange} id={`${title}-${id}`}/>
    </>
  );
}

export default Input;
