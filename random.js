const pg = require('pg');

const pool = new pg.Pool({connectionString: 'livesotope'});

async function random() {
  await pool.query('update app_public.people set ranking = ranking + (random() * 100)::int where id = (select id from app_public.people order by random() limit 1);');
}

setInterval(random, 500);
