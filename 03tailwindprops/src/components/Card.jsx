import React from 'react'

function Card({username}) {
  return (
    <div>
       <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18226128/pexels-photo-18226128/free-photo-of-young-fashionable-woman-walking-on-the-street-and-looking-over-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
      {username}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
