export default function Matomo() {
  return (
    // Tracking pixel; native img avoids a client component and next/image overhead.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      referrerPolicy="no-referrer-when-downgrade"
      src="https://matomo.zbyneksvoboda.cz/matomo.php?idsite=11&rec=1"
      width={1}
      height={1}
      alt=""
      className="border-0 absolute w-px h-px opacity-0"
      aria-hidden="true"
    />
  );
}
