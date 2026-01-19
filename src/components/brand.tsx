export function Brand(props: Readonly<React.ComponentProps<"svg">>) {
  return (
    <svg
      role="graphics-symbol"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M25.6 11.7A10 10 0 0 0 20 10V0A20 20 0 1 1 0 20h10a10 10 0 1 0 15.6-8.3Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 0A10 10 0 0 1 0 10v10A20 20 0 0 0 20 0H10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
