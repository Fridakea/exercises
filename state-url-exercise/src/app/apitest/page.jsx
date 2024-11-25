import { getSubs, postSub } from "@/lib/supabase";

// , postSub, patchSub, deleteSub

async function page() {
  const subscribers = await getSubs();

  async function send(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await postSub(data);
  }

  return (
    <section>
      <form
        action={send}
        className="w-fit mt-6 mx-auto px-8 py-6 bg-gray-900 rounded-xl flex flex-col items-start *:mb-6"
      >
        <h2 className="text-2xl font-semibold">Subscribe</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="rounded-sm" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" className="rounded-sm" />
        </div>

        <button className="px-4 py-2 bg-gray-600 rounded-md">Subscribe</button>
      </form>

      <article className="w-fit mt-6 mx-auto">
        <h2>All subscribers</h2>
        <ul>
          {subscribers.map((sub) => (
            <li key={sub.id}>
              {sub.name} - {sub.email}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default page;
