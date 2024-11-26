import { getSubBy, patchSub, deleteSub } from "@/lib/supabase";
import { redirect } from "next/navigation";

async function page({ params }) {
  const { id } = await params;

  const subscriber = await getSubBy(id);

  console.log("subscriber: ", subscriber);

  // subscriber.map((sub) => console.log("sub specifik", sub.name));

  async function updateSub(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await patchSub(id, data);

    redirect("/");
  }

  async function delSub() {
    "use server";
    await deleteSub(id);

    redirect("/");
  }

  return (
    <form
      action={updateSub}
      className="w-fit h-fit my-32 mx-auto px-8 py-6 bg-gray-100 rounded-xl flex flex-col items-start shadow-lg *:mb-6"
    >
      <h2 className="text-2xl font-bold text-emerald-900">Edit subscriber</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-sm text-emerald-950"
          defaultValue={subscriber.name}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="rounded-sm text-emerald-950"
          defaultValue={subscriber.email}
        />
      </div>

      <div className="flex gap-5">
        <button
          type="button"
          onClick={delSub}
          className="px-5 py-2 border-2 border-emerald-700 rounded-md text-sm tracking-wider transition-all duration-300 hover:bg-emerald-900/10"
        >
          Delete
        </button>
        <button
          type="submit"
          className="px-5 py-2 bg-emerald-700 rounded-md text-white text-sm tracking-wider transition-all duration-300 hover:bg-emerald-900"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default page;
