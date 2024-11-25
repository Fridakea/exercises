const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function getSubs() {
  let response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function postSub(subData) {
  let response = await fetch(url, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subData),
  });

  let data = await response.json();
  return data;
}
