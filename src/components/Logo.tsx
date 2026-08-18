import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Grassar Prime Management home">
      <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M31.5 14A14 14 0 1 0 34 30H24v-7h18v3c0 12-7.4 20-18.5 20A22 22 0 1 1 39 8.5L31.5 14Z" />
        <path d="m35 3 9 9h-5v10h-7V12h-5l8-9Z" className="brand-mark-accent" />
      </svg>
      <span><strong>Grassar</strong><small>Prime Management</small></span>
    </Link>
  );
}
