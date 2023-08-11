import Image from 'next/image';
import fetch from 'node-fetch';

export default async function PaginaQuemSouEu() {
    const data = await getData()
    return (
        <div className="h-[150px] my-[50px] p-7 bg-slate-500 rounded">
            <Image src={data} alt="Avatar do GitHub" width="50" height="50" /><h1>Quem sou eu</h1>
        </div>

    )
}

async function getData() {
    const username = 'LucasNeves1';
    const res = await fetch(`https://api.github.com/users/${username}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}