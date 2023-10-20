export default function Container({ className = "", children }) {
  return (
    <article className={` bg-grey ${className} rounded-xl`}>{children}</article>
  );
}
