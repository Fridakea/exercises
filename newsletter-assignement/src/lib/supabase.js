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

export async function getSubBy(id) {
  const response = await fetch(`${subscribtionsUrl}?id=eq.${id}`, {
    method: "GET",
    headers: headersList,
  });

  const data = await response.json(); // array, should have length 1.
  return data?.[0];
}

export async function postSub(subData) {
  const response = await fetch(subscribtionsUrl, {
    method: "POST",
    headers: headersList,
    body: JSON.stringify(subData),
  });

  return await response.json();
}

export async function patchSub(id, dataToUpdate) {
  const response = await fetch(`${subscribtionsUrl}?id=eq.${id}`, {
    method: "PATCH",
    headers: headersList,
    body: JSON.stringify(dataToUpdate),
  });

  return await response.json();
}

export async function deleteSub(id) {
  const response = await fetch(`${subscribtionsUrl}?id=eq.${id}`, {
    method: "DELETE",
    headers: headersList,
  });

  return await response.json();
}
