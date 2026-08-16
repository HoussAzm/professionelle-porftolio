export default function Segments({ items }) {
  return items.map((seg, i) =>
    seg.hl ? (
      <span key={i} className="text-gradient">{seg.t}</span>
    ) : (
      <span key={i}>{seg.t}</span>
    )
  );
}
