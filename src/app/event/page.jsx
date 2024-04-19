export default async function EventPage({params}) {
  const uuid = params.uuid;
  let headersList = {
    Accept: "application/json",
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  };
  let response = await fetch("https://jlysgfiftmgybuezdgpv.supabase.co/rest/v1/Col1" + uuid {
    headers: headersList,
  });
  let data = await response.json()
  const eventInfo = data[0]
  console.log(data)
  return (
  
<article>
    <h1>{eventInfo.name}</h1>
    <dl>
        <dt>Hvormår</dt>
        <dd>{eventInfo.when}</dd>
    </dl>
    <p>{eventInfo.description}</p>
</article>
)
}
