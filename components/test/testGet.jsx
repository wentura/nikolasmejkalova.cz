// !!! FETCH
const categorieAkce = process.env.WP_CATEGORIE_AKCE;
async function getData() {
  const res = await fetch(
    "http://nikolasmejkalova.zbyneksvoboda.cz/wp-json/wp/v2/posts/"
  );
  if (!res.ok) {
    throw new Error("Couldn't get data");
  }
  return res.json();
}
export default async function TestGet() {
  const data = await getData();

  return (
    <div>
      {data.length}
      {categorieAkce}
      <ul>
        {data.map((item) => {
          return item.categories == categorieAkce ? (
            <div key={item.id}>
              <p>ano</p>
            </div>
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
}
