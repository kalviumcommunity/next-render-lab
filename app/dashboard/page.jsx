import { cookies } from "next/headers";
export default async function Dashboard() {
  const store = await cookies();
  const user = store.get("user")?.value ?? "guest";
  return (
    <main>
      <h1>Your Dashboard</h1>
      <p>Hello, {user}. This is personalised, so it is built per request.</p>
    </main>
  );
}
