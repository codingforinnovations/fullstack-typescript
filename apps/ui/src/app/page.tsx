import { getBaseUrl } from "@src/config";

async function getData() {
  const endpoint = getBaseUrl();
  const url = `${endpoint}/api/data`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


export default async function HomePage() {
  const data = await getData();
  return (
    <div>
      Hello World!
      <br />
      {JSON.stringify(data)}
    </div>
  );
}
