export default async function AddEventPag() {
  function submit() {}
  return (
    <form action={submit}>
      <div className="formcontrol">
        <label htmlFor="form_name">Titel</label>
        <input id="form_name" type="text" name="name" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_name">Hvornår</label>
        <input id="form_when" type="date" name="when" />
      </div>
      <div className="formcontrol">
        <label htmlFor="form_name">Andet du vil sige</label>
        <input id="form_description" type="text" name="description" />
      </div>
      <button>Gem</button>
    </form>
  );
}