module.exports = function handler(_request, response) {
  const url =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL;

  const key =
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  response.setHeader("Cache-Control", "no-store, max-age=0");

  if (!url || !key) {
    return response.status(500).json({
      error: "Vercel에 Supabase URL과 publishable(또는 anon) key 환경변수를 설정해 주세요."
    });
  }

  return response.status(200).json({ url, key });
};
