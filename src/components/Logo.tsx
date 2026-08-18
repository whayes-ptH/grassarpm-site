import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Grassar Prime Management home">
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
        <path
          className="brand-mark-frame"
          fillRule="evenodd"
          d="M18 3h28l15 15v28L46 61H18L3 46V18L18 3Zm2.6 6L9 20.6v22.8L20.6 55h22.8L55 43.4V20.6L43.4 9H20.6Z"
        />
        <path
          className="brand-mark-letter"
          d="M43.8 20.9A15.4 15.4 0 1 0 47 40.3V30H31v6.2h9.2v2.1c-2 2.1-4.6 3.2-7.8 3.2-5.5 0-9.3-3.9-9.3-9.6 0-5.9 4-9.8 9.2-9.8 3.2 0 5.8 1.3 7.9 3.6l3.6-4.8Z"
        />
        <path className="brand-mark-prime" d="m45 13.3 7 8.4h-4.2v7.1h-5.6v-7.1H38l7-8.4Z" />
        <path className="brand-mark-rule" d="M22 50.5h20v2H22z" />
      </svg>
      <span className="brand-copy"><strong>Grassar</strong><small>Prime Management N.V.</small></span>
    </Link>
  );
}
