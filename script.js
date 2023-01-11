const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const place = document.querySelector('.place')

const testimonials = [
    {
      name: 'Emily Thompson',
      restaraunt: "Joe's Diner",
      photo:'https://randomuser.me/api/portraits/women/16.jpg',
      text:
        "I had a fantastic experience at Joe's Diner. The food was delicious, the service was excellent, and the atmosphere was cozy and welcoming. I highly recommend the hamburger and fries. A must-visit for any food lover in the area!",
    },
    {
      name: 'Madison Green',
      restaraunt: "Saag Palace",
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        "I recently dined at Saag Palace and was blown away by the flavors and authenticity of the food. The chicken tikka masala was to die for and the naan was some of the best I've ever had. The prices were also very reasonable. Highly recommend this hidden gem for Indian cuisine.",
    },
    {
      name: 'Olivia Davis',
      restaraunt: "Le Croissant",
      photo: 'https://randomuser.me/api/portraits/women/77.jpg',
      text:
        "If you're looking for a fine dining experience, look no further than Le Croissant. The restaurant has a beautiful setting, with a elegant ambiance. The food was exquisite, with an emphasis on fresh, local ingredients. The service was top-notch and our server was knowledgeable and attentive. A must-try for any foodie",
    },
    {
      name: 'Chloe Martinez',
      restaraunt: "Le Croissant",
      photo: 'https://randomuser.me/api/portraits/women/45.jpg',
      text:
        "The sushi at Sushi Nakamura was nothing short of amazing. Every roll was expertly crafted and full of fresh, high-quality ingredients. The portions were generous and reasonably priced. Service was also friendly and attentive. A must-visit for sushi lovers.",
    },
    {
      name: 'Jacob Smith',
      restaraunt: "The Rib Shack",
      photo: 'https://randomuser.me/api/portraits/men/23.jpg',
      text:
        "I recently visited The Rib Shack and was very impressed with the BBQ. The meat was cooked to perfection and full of flavor. I also loved the sides and the cornbread was particularly delicious. Highly recommend for anyone craving some good BBQ",
    },
    {
      name: 'Abigail Williams',
      restaraunt: "Tony's Pizzeria",
      photo:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      text:
        "The Pizza at Tony's Pizzeria was excellent. The crust was thin and crispy, and the toppings were generous and delicious. The atmosphere was casual and friendly and the prices were very reasonable. Highly recommend for anyone in the area looking for a slice of pizza.",
    },
    {
      name: 'Elizabeth Jones',
      restaraunt: "Noodle Villa",
      photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      text:
        'I had a great experience at Noodle Villa, the service was quick and friendly. The food was authentic and delicious, I highly recommend the Pad Thai and the Tom Yum Soup. The prices were also very reasonable. A great option for anyone craving some good Asian food.',
    },
]

let idx = 1

function updateTestimonial() {
    const { name, restaraunt, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    place.innerHTML = restaraunt

    idx++

    if (idx > testimonials.length - 1 ) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)