export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
export default async function Recipe({ params }) {
  const { id } = await params;
  return (<main><h1>Recipe #{id}</h1></main>);
}
