import { NextResponse } from "next/server";
import { LOCATIONS_DATABASE } from "@/constants/locations";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query")?.toLowerCase().trim() || "";

  // Artificial slight network latency simulation for realistic async debouncing
  await new Promise((resolve) => setTimeout(resolve, 150));

  if (!query) {
    return NextResponse.json({
      success: true,
      locations: LOCATIONS_DATABASE.slice(0, 8),
    });
  }

  const filtered = LOCATIONS_DATABASE.filter(
    (loc) =>
      loc.name.toLowerCase().includes(query) ||
      loc.city.toLowerCase().includes(query) ||
      loc.state.toLowerCase().includes(query) ||
      (loc.code && loc.code.toLowerCase().includes(query))
  );

  return NextResponse.json({
    success: true,
    locations: filtered,
  });
}
