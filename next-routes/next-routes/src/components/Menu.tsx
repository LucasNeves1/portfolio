import Link from "next/link";

export default function Menu() {
    return (
        <>
            <header>
                <ul className="flex w-full justify-between">
                    <li><Link href='/quem_sou_eu'>Quem sou eu</Link></li>
                    <li><Link href='/experiencia'>Expêriencia</Link></li>
                    <li><Link href='/projetos'>Projetos</Link></li>
                    <li><Link href='/competencias'>Competências</Link></li>
                </ul>
            </header>
        </>
    )
}