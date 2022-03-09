import http from 'k6/http';

export default function () {
  const res = http.get('https://animechan.vercel.app/api/random');
  console.log(res.body);

  let body = JSON.parse(res.body);
  let result = body.anime;
  console.log(result);
}

