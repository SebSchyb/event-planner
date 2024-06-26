import { redirect } from "next/navigation";
export default async function AddEventPage() {
  async function submit(formData) {
    "use server";
    let headersList = {
      Accept: "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Prefer: "return=representation",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      name: formData.get("name"),
      when: formData.get("when"),
      description: formData.get("description"),
    });

    let response = await fetch("https://jlysgfiftmgybuezdgpv.supabase.co/rest/v1/Col1", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    // console.log(data);
    const id = data[0].id;
    redirect("/event/" + id);

    // til en anden gang brug uuid pls
  }
  return (
    <form action={submit}>
      <div className="formcontrol">
        <label htmlFor="form_name">Titel</label>
        <input id="form_namne" type="text" name="name" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_when">Hvornår</label>
        <input id="form_when" type="date" name="when" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_description">Andet du vil sige?</label>
        <input id="form_description" type="text" name="description" />
      </div>
      <button>Gem</button>
    </form>
  );
}
