type D1Result<T = Record<string, unknown>> = {
  results: T[];
  success: boolean;
  meta: Record<string, unknown>;
};

export async function queryD1<T = Record<string, unknown>>(
  token: string,
  accountId: string,
  databaseId: string,
  sql: string,
  params: unknown[] = []
): Promise<D1Result<T>> {
  const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sql, params }),
  });

  if (!response.ok) {
    const err = await response.json() as { errors?: { message: string }[] };
    throw new Error(`D1 API Error: ${err.errors?.[0]?.message ?? response.statusText}`);
  }

  const data = await response.json() as { result: D1Result<T>[] };
  return data.result[0];
}