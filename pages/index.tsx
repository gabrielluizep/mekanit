import { randomBytes } from 'crypto'
import Head from 'next/head'
import { useState } from 'react'

interface Item {
  id: string
  quantity: number
  description: string
  unitValue: number
  totalValue: number
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([
    { id: '1', quantity: 1, description: 'Filtro de combustível', unitValue: 42, totalValue: 42 },
  ])

  return (
    <>
      <Head>
        <title>Mekanit</title>
        <meta
          name="description"
          content="A software to manage mechanical workshop invoices and customer interaction"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-lg">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="text-left w-12">Qntd.</th>
                <th className="text-left w-64">Descrição</th>
                <th className="text-right">Valor unit.</th>
                <th className="text-right">Valor total</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">
                    <input className="w-full text-left" type="number" value={item.quantity}></input>
                  </td>
                  <td className="text-left">
                    <input className="w-full text-left" type="text" value={item.description}></input>
                  </td>
                  <td className="text-right">
                    <input className="w-full text-right" type="number" value={item.unitValue}></input>
                  </td>
                  <td className="">
                    <input className="w-full text-right" type="number" value={item.totalValue}></input>
                  </td>
                  <td
                    className="text-right"
                    onClick={() => setItems((prev) => prev.filter((i) => i !== item))}
                  >
                    <button>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="w-full outline-dashed rounded-sm hover:opacity-50"
            onClick={() =>
              setItems((prev) => [
                ...prev,
                { id: Math.random().toString(), quantity: 1, description: '', unitValue: 0, totalValue: 0 },
              ])
            }
          >
            +
          </button>
        </div>
      </main>
    </>
  )
}
