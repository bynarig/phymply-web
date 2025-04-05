"use client"

import Logo from "@/components/ui/Logo";

export default function SymbolicsWidget() {
  return (
    <>
      <Logo className="flex justify-center" imageClassName="h-50 w-50"/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Гімн ліцею</h1>

        <div className="max-w-2xl mx-auto">
          <p className="mb-4">
            У перші роки існування ліцею, учнем Арсеном Гончаренко, було створено гімн навчального закладу, який сьогодні вважається офіційним гімном ФІМЛІ.
          </p>

          <div className="my-6 text-center">
            <p className="text-lg font-medium">Арсен Гончаренко</p>
            <h2 className="text-xl font-bold mt-2">Гімн ліцею</h2>
          </div>

          <div className="space-y-4">
            <div className="anthem-verse">
              <p>Ти один такий у світі,</p>
              <p>Годі іншого шукать,</p>
              <p>Сперечатись: чи вступати,</p>
              <p>Зі сльозами залишать.</p>
            </div>

            <div className="anthem-verse">
              <p>В цьому світі, недосяжнім</p>
              <p>Для дурних і ворогів,</p>
              <p>Живемо ми на найкращім</p>
              <p>Із сусідніх островків.</p>
            </div>

            <div className="anthem-chorus">
              <p className="font-medium italic">Приспів:</p>
              <p>Це наш ліцей, це наш ФІМЛІ -</p>
              <p>Знають в усіх кутках землі.</p>
              <p>Його шанують, поважають і дорослі і малі.</p>
              <p>Це наш ФІМЛІ, це наш ліцей –</p>
              <p>Казка дорослих для дітей.</p>
              <p>Якщо ти прагнеш знань і друзів,</p>
              <p>Поспішай в будинок цей</p>
              <p>Це наш ФІМЛІ, це наш ліцей…</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}