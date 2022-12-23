import { randomBytes } from 'crypto'
import Head from 'next/head'
import { useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'

interface Item {
  id: string | null
  quantity: number
  description: string
  unitValue: number
  totalValue: number
}

export default function Home() {
  const { register, handleSubmit, control } = useForm()
  const { fields, append, remove } = useFieldArray({ control, name: 'items' })

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
              {fields.map((field, index) => (
                <tr key={field.id}>
                  <td>
                    <input className="w-full text-left" {...register(`items.${index}.quantity`)} />
                  </td>
                  <td>
                    <input className="w-full text-left" {...register(`items.${index}.description`)} />
                  </td>
                  <td>
                    <input className="w-full text-right" {...register(`items.${index}.unitValue`)} />
                  </td>
                  <td>
                    <input className="w-full text-right" {...register(`items.${index}.totalValue`)} />
                  </td>
                  <td>
                    <button className="w-full text-right" onClick={() => remove(index)}>
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="w-full outline-dashed rounded-sm hover:opacity-50"
            onClick={() =>
              append({
                id: Math.random().toString(),
                quantity: 1,
                description: '',
                unitValue: 0,
                totalValue: 0,
              })
            }
          >
            +
          </button>

          <button onClick={handleSubmit((data) => console.log(data))}>submit</button>
        </div>
      </main>
    </>
  )
}
