import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    position: "Student",
    message: "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Student",
    message: "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
  },
  {
    id: 3,
    name: "Rahul Patil",
    position: "Engineering Student",
    message: "The content is well-structured and easy to follow. It really helped me prepare for exams.",
  },
  {
    id: 4,
    name: "Ananya Sharma",
    position: "CS Student",
    message: "I love the practical approach and projects. Learning feels fun and effective here.",
  },
];

  return (
    <section className='testimonials'>
    <h2>What our students say</h2>
    <div className="testimonial-cards">
        {
          testimonialsData.map((e)=>(
            <div className="testimonial-card" key={e.id }>
                <p className='message'>{e.message}</p>
                <div className='info'>
                  <div className="name">{e.name}</div>
                  <p className="position">{e.position}</p>
                </div>
              
            </div>
          ))
        }
    </div>
    </section>
  )
}

export default Testimonials