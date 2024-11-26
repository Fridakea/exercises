const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const subscribtionsUrl = url + "/subscribtions";

const headersList = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: key,
  Prefer: "return=representation",
};

export async function getSubs() {
  const response = await fetch(subscribtionsUrl, {
    method: "GET",
    headers: headersList,
  });

  return await response.json();
}

export async function postSub(subData) {
  const response = await fetch(subscribtionsUrl, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subData),
  });

  return await response.json();
}
