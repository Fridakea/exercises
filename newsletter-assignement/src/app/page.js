import { getSubs, postSub } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default async function Home() {
  const subscribers = await getSubs();

  async function send(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await postSub(data);

    revalidatePath("/");
  }

  console.log(subscribers);

  return (
    <section className="min-h-screen max-w-[1000] px-4 mx-auto flex flex-col">
      <form
        action={send}
        className="w-fit h-fit my-32 mx-auto px-8 py-6 bg-gray-100 rounded-xl flex flex-col items-start shadow-lg *:mb-6"
      >
        <h2 className="text-2xl font-bold text-emerald-900">Sign up</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-sm text-emerald-950"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="rounded-sm text-emerald-950"
          />
        </div>

        <button className="px-6 py-2 bg-emerald-700 rounded-md text-white tracking-wider transition-all duration-300 hover:bg-emerald-900">
          Subscribe
        </button>
      </form>

      <article className="mt-6 mx-auto">
        <h2 className="text-2xl font-bold text-emerald-900 mb-8">
          All subscribers
        </h2>
        <ul className="p-4 bg-gray-50 rounded-2xl grid grid-cols-2 gap-4 md:p-8 md:grid-cols-3">
          {subscribers.map((sub) => (
            <Link
              key={sub.id}
              href={`/update/${sub.id}`}
              className="p-4 bg-white shadow-sm rounded-md transition-all duration-300 flex gap-4 justify-between items-center hover:bg-emerald-600/10"
            >
              <li className="break-all">
                <h3 className="text-lg">{sub.name}</h3>
                <p className="text-xs text-black/75">{sub.email}</p>
              </li>
              <IoIosArrowForward />
            </Link>
          ))}
        </ul>
      </article>
    </section>
  );
}
