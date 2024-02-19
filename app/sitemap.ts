export default async function sitemap() {

  let routes = ['', '/testpage', ''].map((route) => ({
    url: `https://hellofaizan.tech${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}