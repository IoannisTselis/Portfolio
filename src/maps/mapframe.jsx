export default function MapFrame({
  src = '/hospital-map/index.html',
  height = '100%',
  minHeight = 0,
  className = 'map_frame',
  title = 'Emergency Hospital Accessibility Map',
}) {
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      style={{
        aspectRatio: '16/9',
        display: 'block',
        aspectRatio:"16/9", 
        width:"100%"
      }}
    />
  );
}