/* eslint-disable react/prop-types */


function MentorAdviserCard({ person }) {
    return (
        <div className="border rounded-lg hover:scale-110 transition duration-500 cursor-pointer object-cover overflow-hidden shadow-lg ">
            <img src={person.image} alt={person.name} className="w-full  object-cover object-center" />
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-600">{person.name}</h3>
                <p className="mb-4">{person.college}</p>
                <button className="bg-blue-500 hover:bg-blue-600 w-full text-white py-1 px-4 rounded">
                    Message
                </button>
            </div>
        </div>
    );
}

export default MentorAdviserCard;
