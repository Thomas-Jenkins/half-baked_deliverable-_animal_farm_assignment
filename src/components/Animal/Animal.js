export default function Animal({ name, type, says, top, left }) {
  return <>
    <div className="animals" style={{ top, left }}></div>
    <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
    <span>{name}</span>
    <span>{says}</span>
  </>;
}
