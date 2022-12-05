import css from "./index.css"

export function Social({ children, url }) {
  return (
    <a className="social" href={url} target="_blank" rel="noopner noreferrer">
      {children}
    </a>
  );
}