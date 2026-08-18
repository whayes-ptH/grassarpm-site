import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Grassar Prime Management home">
      <img
        className="brand-lockup"
        src="/grassar-prime-logo-compact-reversed.svg"
        width="250"
        height="58"
        alt="Grassar Prime Management N.V."
      />
    </Link>
  );
}
