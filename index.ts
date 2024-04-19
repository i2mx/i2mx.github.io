const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (_req: Request) => {
  const osu = await (async () => {
    const osu_res = await fetch("https://osu.ppy.sh/api/get_user?u=35063682&k=7277b4eb45ce204b8641ca7dd74a117b7c494005");
    const osu_data = await osu_res.json();

    const { username, pp_rank, pp_country_rank, pp_raw, accuracy } = osu_data[0];

    return { username, pp_rank, pp_country_rank, pp_raw, accuracy };
  })();

  const teto = await (async () => {
    const teto_res = await fetch("https://ch.tetr.io/api/users/exhqx/");
    const teto_data = await teto_res.json();

    // console.log(teto_data)

    const { username, league } = teto_data.data.user;
    const { rating, apm, pps, standing, standing_local, percentile_rank } = league;
    return { username, rating, apm, pps, standing, standing_local, percentile_rank };
  })();

  return Response.json({ osu, teto }, {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    status: 200
  });
});