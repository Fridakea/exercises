async function page({ params }) {
  const { id } = await params;

  // lav funktionen "getSubById"
  const subscriber = await getSubById(id);

  retun(
    <div>
      {subscriber.name} - {subscriber.email}
    </div>
  );
}
