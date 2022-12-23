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
        <div className="max-w-lg mx-auto">
          <div className="flex justify-between w-full mb-4">
            <div>
              <div className="flex space-x-2">
                <p>Nome</p>
                <p>Cliente</p>
              </div>

              <div className="flex space-x-2">
                <p>Fabricante</p>
                <p>Ford</p>
              </div>

              <div className="flex space-x-2">
                <p>Modelo</p>
                <p>Focus</p>
              </div>

              <div className="flex space-x-2">
                <p>Motor</p>
                <p>1.4</p>
              </div>
            </div>
            <div>
              <div className="flex space-x-2">
                <p>Telefone</p>
                <p>4832324848</p>
              </div>

              <div className="flex space-x-2">
                <p>E-mail</p>
                <p>john@doe.com</p>
              </div>

              <div className="flex space-x-2">
                <p>Placa</p>
                <p>AAA9999</p>
              </div>

              <div className="flex space-x-2">
                <p>Quilometragem</p>
                <p>123456</p>
              </div>
            </div>
          </div>

          <table className="table-auto w-full mb-4">
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
                <tr className="mb-4" key={field.id}>
                  <td>
                    <input className="w-full text-center" {...register(`items.${index}.quantity`)} />
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
            className="w-full outline-dashed rounded-sm hover:opacity-50 mb-10"
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

          <button className="" onClick={handleSubmit((data) => console.log(data))}>
            submit
          </button>
        </div>
      </main>
    </>
  )
}
