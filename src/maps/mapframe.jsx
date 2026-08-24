export default function MapFrame({
  src = '/hospital-map/index.html',
  height = '100%',
  minHeight = 0,
  className = '',
  title = 'Emergency Hospital Accessibility Map',
}) {
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      style={{
        width: '100%',
        aspectRatio: '16/9',
        minHeight,
        border: 'none',
        display: 'block',
      }}
    />
  );
}