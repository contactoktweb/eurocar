import { client } from "@/sanity/lib/client";
import { globalConfigQuery } from "@/sanity/lib/queries";
import HeaderClient from "./header-client";

export default async function Header() {
  const globalConfig = await client.fetch(globalConfigQuery, {}, { cache: 'no-store' });

  return <HeaderClient globalConfig={globalConfig} />;
}
