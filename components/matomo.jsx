const MATOMO_PIXEL =
  "https://matomo.zbyneksvoboda.cz/matomo.php?idsite=11&rec=1";

export default function Matomo() {
  return (
    // Tracking pixel se záměrně vykresluje přes <img>: next/image by ho
    // protahoval optimalizací a pixel se nemá předstahovat ani cachovat.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={MATOMO_PIXEL}
      referrerPolicy="no-referrer-when-downgrade"
      width={1}
      height={1}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="absolute w-px h-px border-0 opacity-0"
    />
  );
}
