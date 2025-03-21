const Trainers = ({trainers}) => {
  return (
    <section>
        {
        trainers?.length > 0 && (
          <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Meet the Trainers</h2>
                <p class="mt-6 text-lg/8 text-gray-600">
                  We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering
                  the best results for our clients.
                </p>
              </div>
              <ul
                role="list"
                class="mx-auto list-none mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                id="trainers-list"
              >
                {trainers.map((t) => (
                  <li class="list-none" key={t.id}>
                    <img class="mx-auto size-20 rounded-full" src={t.image} alt={t.name} />
                    <h3 class="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{t.name}</h3>
                    <p class="text-sm/6 text-gray-600">{t.occupation}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
    </section>
  )
};

export default Trainers;
