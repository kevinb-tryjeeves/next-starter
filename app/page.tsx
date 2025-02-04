import type { Invoice } from "@/types";

export default async function Home() {
  const response = await fetch(
    new URL("/api/invoices", process.env.NEXT_PUBLIC_APP_URL)
  );
  const invoices: Invoice[] = await response.json();
  console.log({ invoices });

  return (
    <div className="flex gap-4 items-center flex-col">
      <h1>Hello, world!</h1>
      <pre>{JSON.stringify(invoices, null, 2)}</pre>
    </div>
  );
}
