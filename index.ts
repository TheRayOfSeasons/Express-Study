import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const api = express();

api.use(bodyParser.json());

api.get('/', (request: Request, response: Response) =>
{
  /* query params */
  const { query, search } = request.query;
  console.log(query);
  console.log(search);

  // if(!search)
  // {
  //   return response.status(400).send('Walang search ampotek jusko');
  // }

  // response.send(request.query);

  /* post body */

  const { barker, nayeon } = request.body;
  console.log(`Nayeon: ${nayeon}`);
  response.send(request.body.barker);

  /* path params */
  // response.send('Noice');
});

api.use('/blabla/:path_param/', (request: Request, response) =>
{
  response.send(request.params);
});

api.listen(8000, () => console.log('API Started'));
