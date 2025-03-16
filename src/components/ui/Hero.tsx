import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Hero() {
  return (<>
    <Logo className="flex justify-center" imageClassName="h-50 w-50"/>
    <div className="hero py-12">

      <div className="hero-content text-center">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">Черкаський фізико-математичний ліцей (ФІМЛІ)</h1>
          <p className="py-6">
            Офіційний сайт Черкаського фізико-математичного ліцею зі всією необхідною інформацією для учнів, батьків та вчителів.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/how-to-join" className="btn btn-primary">Вимоги для вступу</Link>
            <Link href="/teachers" className="btn btn-secondary">Для вчителів</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}