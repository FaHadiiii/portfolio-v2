import { unstable_cache } from "next/cache";

const GITHUB_USERNAME = "FaHadiiii";

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(
      `/v4/${GITHUB_USERNAME}`,
      "https://github-contributions-api.jogruber.de",
    );
    const response = await fetch(url);
    const data = await response.json();
    const total = data.total[new Date().getFullYear()];
    return { contributions: data.contributions, total };
  },
  ["github-contributions"],
  { revalidate: 60 * 60 * 24 },
);

export async function GET() {
  const data = await getCachedContributions();
  return Response.json(data);
}
