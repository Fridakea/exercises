export default async function Page({ params }) {
  const id = (await params).id;
  const [product, setProduct] = useState();

  return <div>{product?.title}</div>;
}
