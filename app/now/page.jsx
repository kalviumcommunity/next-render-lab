export default async function Now() {
  const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", { cache: "no-store" });
  let time = "unavailable";
  try { time = (await res.json()).datetime; } catch (e) {}
  return (
    <main>
      <h1>Live Time</h1>
      <p>Fetched fresh on every request: {time}</p>
    </main>
  );
}
