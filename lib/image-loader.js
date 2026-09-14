// `output: "export"` vypíná optimalizaci obrázků Next.js. Cloudinary i WordPress
// ale umí transformace na své straně, takže se sem vkládají ručně – jinak by se
// vždy stahoval originál v plném rozlišení.
const CLOUDINARY_UPLOAD = "/image/upload/";

export default function imageLoader({ src, width, quality }) {
  if (src.includes("res.cloudinary.com") && src.includes(CLOUDINARY_UPLOAD)) {
    const [prefix, rest] = src.split(CLOUDINARY_UPLOAD);
    // Bez dpr_auto: DPR už řeší srcset s `w` deskriptory, jinak by se obrázek
    // zvětšoval dvakrát.
    const transforms = [
      "f_auto",
      `q_${quality || "auto"}`,
      `w_${width}`,
      "c_limit",
    ].join(",");
    return `${prefix}${CLOUDINARY_UPLOAD}${transforms}/${rest}`;
  }

  return src;
}
