import Link from "next/link";

export default function Menu() {

    const itemsMenu = [
        { link: '/home', texto: 'Home' },
        { link: '/quem-sou-eu', texto: 'Quem sou eu' },
        { link: '/projetos', texto: 'Projetos' },
        { link: '/competencias', texto: 'Competências' },
      ];

    return (
        <>
            <header>
                <ul className="flex justify-between">
                    {itemsMenu.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>{item.texto}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}