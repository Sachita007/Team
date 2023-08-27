
import './App.css'
import UniversityCard from './Components/UniversityCard';
import MentorCard from './Components/MentorCard';
import university from './assets/university.jpg'
import person from './assets/person.jpg'
import Footer from './Components/Footer';
import MentorAdviserCard from './Components/MentorAdviserCard';



function App() {
 const universities = [
    {
      id: 1,
      name: "Cambridge University",
      image: university,
    },
    {
      id: 2,
      name: "Cambridge University",
      image: university,
    },
    {
      id: 3,
      name: "Cambridge University",
      image: university,
    },
    {
      id: 4,
      name: "Cambridge University",
      image: university,
    },
   
    //... add other universities
  ];

  const mentors = [
    {
      id: 1,
      name: "John Doe",
      university: "Cambridge University",
      image: person,
    },
    {
      id: 2,
      name: "John Doe",
      university: "Cambridge University",
      image: person,
    },
    {
      id: 3,
      name: "John Doe",
      university: "Cambridge University",
      image: person,
    },
    {
      id: 4,
      name: "John Doe",
      university: "Cambridge University",
      image: person,
    },
    
    //... add other mentors
  ];
  const mentorsAndAdvisers = [
        {
            id: 1,
            name: "Dr. John Smith",
            college: "Cambridge University",
            image: person,
        },
         {
            id: 2,
            name: "Dr. John Smith",
            college: "Cambridge University",
            image: person,
        },
         {
            id: 3,
            name: "Dr. John Smith",
            college: "Cambridge University",
            image: person,
        },
         {
            id: 4,
            name: "Dr. John Smith",
            college: "Cambridge University",
            image: person,
        },
        //... add other mentors/advisers
    ];

  return (
    <div>
    <div className="p-10 mb-[5rem] font-poppins">
      <h1 className="text-4xl font-bold mb-5 text-gray-700 text-center">Our Team</h1>
      <p className="mb-10 text-xl text-center text-gray-400">
        Learn from scientists, research scholars from the top institutes in the world.
      </p>

      <div className="grid grid-cols-1 lg:mx-[4rem] min-[500px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 mb-[5rem]">
        {universities.map(university => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-9 text-gray-700 text-center mt-[3rem]">Meet Your Mentors</h2>
      <div className="grid grid-cols-1 lg:mx-[4rem] min-[500px]:grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4 mb-[5rem]">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
      <section className="mt-[5ren] lg:mx-[4rem]">
                <h2 className="text-3xl font-bold mb-9 text-gray-700">Mentors and Advisers</h2>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4">
                    {mentorsAndAdvisers.map(person => (
                        <MentorAdviserCard key={person.id} person={person} />
                    ))}
                </div>
            </section>
    </div>
    <Footer/>
    </div>
  );
}

export default App
