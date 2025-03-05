import navigation from "../../data/navigation.json";
import Nav from "./Nav";

export default function InternalHero({ title, excerpt, image }) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="hidden lg:absolute lg:inset-0 lg:block">
        <svg
          fill="none"
          width={640}
          height={784}
          viewBox="0 0 640 784"
          className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
        >
          <defs>
            <pattern
              x={118}
              y={0}
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
            </pattern>
          </defs>
          <rect y={72} fill="currentColor" width={640} height={640} className="text-gray-50" />
          <rect x={118} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" width={404} height={784} />
        </svg>
      </div>

      <div className="relative pb-16 pt-6 sm:pb-24 lg:pb-32">
        <Nav menu={navigation.main} />

        <main className="mx-auto mt-16 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl font-bold sm:text-5xl xl:text-6xl">
                  {title}
                </span>
              </h1>
              {excerpt && (
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {excerpt}
                </p>
              )}
              
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                fill="none"
                width={640}
                height={784}
                viewBox="0 0 640 784"
                aria-hidden="true"
                className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
              >
                <defs>
                  <pattern
                    x={118}
                    y={0}
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} fill="currentColor" width={4} height={4} className="text-gray-200" />
                  </pattern>
                </defs>
                <rect y={72} fill="currentColor" width={640} height={640} className="text-gray-50" />
                <rect x={118} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" width={404} height={784} />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <img
                    alt=""
                    src={image}
                    className="w-full"
                  />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
