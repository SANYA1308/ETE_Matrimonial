import React from 'react'



const Card = (props) => {
  return (
        // <div class="p-2">
        //     <div class="bg-gray-100 p-6 rounded-lg">
        //         <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
        //         <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">CSE</h3>
        //         <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Ms. Ele</h2>
        //         <p class="leading-relaxed text-base ">Develops, plans, and implements curriculum, lesson plans, and educational programs for student audiences within areas of expertise. Advises, tests, and teaches students audiences in a variety of academic subjects. Presents and reinforces learning concepts within a specified subject or subject area.</p>
        //     </div>
        // </div>
        <div class="p-2">
            <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src={props.img} alt="content" />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">{props.stream}</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{props.name}</h2>
                <p class="leading-relaxed text-base ">{props.description}</p>
            </div>
        </div>
  )
}

export default Card