import { Api } from '@beevk/newsapi-sdk';

const getSdk = () => Api.getInstance('https://newsapi.org', () => {
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', '099148be22804e849a0c6fe022b7cf5e');
  }
  return localStorage.getItem('token');
});

export default getSdk;
