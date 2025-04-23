export default function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 0L46.6506 12.5V37.5L25 50L3.34936 37.5V12.5L25 0Z" fill="currentColor" className="text-maroon-600" />
      <path d="M25 5L41.3397 14.5V33.5L25 43L8.66025 33.5V14.5L25 5Z" fill="currentColor" className="text-maroon-400" />
      <path d="M25 10L36.0289 16.5V29.5L25 36L13.9711 29.5V16.5L25 10Z" fill="white" />
      <path d="M15 18L25 23.5L35 18" stroke="currentColor" strokeWidth="2" className="text-maroon-600" />
      <path d="M25 23.5V34" stroke="currentColor" strokeWidth="2" className="text-maroon-600" />
    </svg>
  )
}
