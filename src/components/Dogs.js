import "./DogStyles.css";
import DogsData from "./DogsData";
import Dog1 from "../assets/3.jpg";
import Dog2 from "../assets/4.jpg";
import Dog3 from "../assets/6.jpg";

function Dogs() {
  return (
    <div className="dogs">
      <h1>Our puppies</h1>
      <p>At Sherlock, we're more than just a rescue center – we're a haven for furry souls seeking a second chance. With a team of devoted volunteers and experienced professionals, we provide each dog with tailored attention, medical care, and training to help them thrive.</p>
      <div className="dogs_card">
        <DogsData
          image={Dog1}
          heading="Luna"
          text="Luna is a gentle and affectionate Border Collie with striking brown and white markings. She has soulful eyes that seem to understand your every mood. Luna is intelligent and eager to please, making her a quick learner when it comes to training and tricks. She enjoys cuddling up for movie nights just as much as she loves her outdoor playtime."
        />
        <DogsData
          image={Dog2}
          heading="Buddy"
          text="Buddy is a cheerful and energetic Labrador Retriever mix. With his glossy, chocolate-brown coat and wagging tail, he's always ready for an adventure. Buddy loves playing fetch at the park, going for long walks, and is known for his friendly nature. He gets along well with children and other dogs, making him a great companion for an active family or individual."
        />
        <DogsData
          image={Dog3}
          heading="Rocky"
          text="Rocky is a sturdy and loyal mixed-breed dog with a heart of gold. His brindle coat and strong physique give him a rugged charm that's hard to resist. Rocky is a true protector and is exceptionally gentle with children. He's content with lounging around the house or going on leisurely strolls through the neighborhood."
          
        />
      </div>
      <h2>Regular Tips on Pet Health</h2>
      <h3>Regular Vet Visits:</h3>
      <p>Schedule regular check-ups with a veterinarian to ensure your pet's overall health. Regular exams can catch potential issues early and keep vaccinations up to date.</p>
      <h3>Balanced Diet:</h3>
      <p>Feed your pet a balanced and appropriate diet for their age, size, and activity level. Consult your vet for specific dietary recommendations.</p>
      <h3>Hydration:</h3>
      <p>Provide access to clean and fresh water at all times. Proper hydration is essential for your pet's well-being.</p>
      <h3>Exercise:</h3>
      <p>Engage your pet in regular exercise to maintain a healthy weight and promote cardiovascular fitness. The amount of exercise needed depends on the breed and age of your pet.</p>
    </div>
  );
}

export default Dogs;
