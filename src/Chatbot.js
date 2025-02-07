import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot visibility

  // Predefined questions and answers
  const predefinedResponses = {
  // Greetings
  "hi": "Hello! How can I help you?",
  "hello": "Hi there! What can I do for you?",
  "hey": "Hey! How's it going?",
  "good morning": "Good morning! How can I assist you today?",
  "good afternoon": "Good afternoon! What can I do for you?",
  "good evening": "Good evening! How can I help?",
  "howdy": "Howdy! What's up?",

  // Basic Questions
  "what is your name": "I'm a simple chatbot. You can call me Bot!",
  "what can you do": "I can answer your questions. Try asking me something!",
  "who made you": "I was created by a developer to help you with your questions.",
  "are you a robot": "Yes, I'm a chatbot designed to assist you!",
  "are you human": "No, I'm just a bot, but I'm here to help!",
  "what are you": "I'm a chatbot programmed to answer your questions.",

  // Small Talk
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "how's it going": "Everything's running smoothly on my end! How about you?",
  "what's up": "Not much, just here to help you! What's up with you?",
  "how have you been": "I've been great, thanks for asking! How about you?",
  "what's new": "Nothing much, just waiting to help you! What's new with you?",
  "how's your day": "My day is going well! How about yours?",

  // Help and Support
  "help": "Sure! What do you need help with?",
  "can you help me": "Of course! What do you need assistance with?",
  "what can you help me with": "I can help answer your questions or provide information. Just ask!",
  "i need help": "No problem! What do you need help with?",
  "support": "I'm here to help! What do you need support with?",

  // Fun Questions
  "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
  "do you know any jokes": "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
  "make me laugh": "Why don't skeletons fight each other? They don't have the guts!",
  "what's your favorite color": "I'm a bot, so I don't have a favorite color, but I like all the colors in the rainbow!",
  "what's your favorite food": "I don't eat, but if I did, I'd probably love some binary code!",
  "do you like music": "I can't listen to music, but I think it's great that you enjoy it!",

  // Technology
  "what is ai": "AI stands for Artificial Intelligence. It's the simulation of human intelligence in machines.",
  "what is machine learning": "Machine learning is a subset of AI that enables systems to learn and improve from experience.",
  "what is a chatbot": "A chatbot is a software application that simulates human conversation through text or voice interactions.",
  "what is programming": "Programming is the process of writing instructions for computers to execute specific tasks.",
  "what is javascript": "JavaScript is a programming language used to create interactive web pages and applications.",
  "what is react": "React is a JavaScript library for building user interfaces, particularly single-page applications.",

  // Personal Questions
  "what is your age": "I'm just a bot, so I don't have an age!",
  "where are you from": "I exist in the digital world, so I don't have a physical location!",
  "do you have feelings": "No, I don't have feelings, but I'm here to help you!",
  "do you sleep": "No, I don't sleep. I'm always here to assist you!",
  "do you dream": "No, I don't dream, but I can help answer your questions!",

  // General Knowledge
  "what is the capital of france": "The capital of France is Paris.",
  "what is the capital of germany": "The capital of Germany is Berlin.",
  "what is the capital of italy": "The capital of Italy is Rome.",
  "what is the capital of spain": "The capital of Spain is Madrid.",
  "what is the capital of japan": "The capital of Japan is Tokyo.",
  "what is the capital of canada": "The capital of Canada is Ottawa.",

  // Science
  "what is gravity": "Gravity is the force that attracts objects with mass toward each other.",
  "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
  "what is photosynthesis": "Photosynthesis is the process by which plants convert sunlight into energy.",
  "what is a black hole": "A black hole is a region of spacetime where gravity is so strong that nothing can escape.",
  "what is the big bang": "The Big Bang is the scientific theory that explains the origin of the universe.",

  // Math
  "what is pi": "Pi (π) is a mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 3.14159.",
  "what is a prime number": "A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.",
  "what is the square root of 64": "The square root of 64 is 8.",
  "what is 2 + 2": "2 + 2 equals 4.",
  "what is 10 times 10": "10 times 10 equals 100.",

  // History
  "who invented the telephone": "Alexander Graham Bell is credited with inventing the telephone.",
  "who discovered america": "Christopher Columbus is often credited with discovering America in 1492.",
  "who was the first president of the united states": "The first president of the United States was George Washington.",
  "what was the industrial revolution": "The Industrial Revolution was a period of major industrialization in the 18th and 19th centuries.",
  "what caused world war i": "World War I was caused by a combination of factors, including militarism, alliances, imperialism, and nationalism.",

  // Pop Culture
  "who is spiderman": "Spider-Man is a fictional superhero created by Stan Lee and Steve Ditko.",
  "who is batman": "Batman is a fictional superhero created by Bob Kane and Bill Finger.",
  "who is harry potter": "Harry Potter is the main character in the Harry Potter book series by J.K. Rowling.",
  "what is star wars": "Star Wars is a popular science fiction franchise created by George Lucas.",
  "what is marvel": "Marvel is a comic book and entertainment company known for its superhero characters like Iron Man and Spider-Man.",

   // Basics of Disaster Management
  "what is disaster management": "Disaster management is the organization and management of resources and responsibilities for dealing with all humanitarian aspects of emergencies, including preparedness, response, and recovery.",
  "what are the types of disasters": "Disasters can be natural (e.g., earthquakes, floods) or man-made (e.g., industrial accidents, terrorism).",
  "what is a natural disaster": "A natural disaster is a major adverse event resulting from natural processes of the Earth, such as earthquakes, floods, or hurricanes.",
  "what is a man-made disaster": "A man-made disaster is a catastrophic event caused by human actions, such as industrial accidents, nuclear explosions, or terrorism.",
  "what are the phases of disaster management": "The phases of disaster management are: 1) Mitigation, 2) Preparedness, 3) Response, and 4) Recovery.",
  "what is disaster mitigation": "Disaster mitigation involves efforts to reduce or eliminate the long-term risk to human life and property from disasters.",
  "what is disaster preparedness": "Disaster preparedness involves planning and training to ensure effective response to disasters.",
  "what is disaster response": "Disaster response involves actions taken immediately after a disaster to save lives and property.",
  "what is disaster recovery": "Disaster recovery involves restoring affected communities to normalcy after a disaster.",

  // Natural Disasters
  "what causes earthquakes": "Earthquakes are caused by the sudden release of energy in the Earth's crust, often due to tectonic plate movements.",
  "what should I do during an earthquake": "During an earthquake, drop to the ground, take cover under sturdy furniture, and hold on until the shaking stops.",
  "what is a tsunami": "A tsunami is a series of ocean waves with very long wavelengths, usually caused by underwater earthquakes or volcanic eruptions.",
  "what should I do during a tsunami": "During a tsunami, move to higher ground immediately and stay away from the coast.",
  "what causes floods": "Floods are caused by heavy rainfall, overflowing rivers, or dam failures.",
  "what should I do during a flood": "During a flood, move to higher ground, avoid walking or driving through floodwaters, and follow evacuation orders.",
  "what is a hurricane": "A hurricane is a powerful tropical storm with strong winds and heavy rain.",
  "what should I do during a hurricane": "During a hurricane, stay indoors, away from windows, and follow local authorities' instructions.",
  "what is a tornado": "A tornado is a violently rotating column of air extending from a thunderstorm to the ground.",
  "what should I do during a tornado": "During a tornado, take shelter in a basement or an interior room without windows.",
  "what is a volcanic eruption": "A volcanic eruption occurs when magma, ash, and gases are expelled from a volcano.",
  "what should I do during a volcanic eruption": "During a volcanic eruption, follow evacuation orders, avoid river valleys, and protect yourself from ashfall.",

  // Man-Made Disasters
  "what is a nuclear disaster": "A nuclear disaster involves the release of radioactive materials, often due to accidents at nuclear power plants.",
  "what should I do during a nuclear disaster": "During a nuclear disaster, stay indoors, close all windows and doors, and follow official instructions.",
  "what is a chemical spill": "A chemical spill is the release of hazardous chemicals into the environment.",
  "what should I do during a chemical spill": "During a chemical spill, evacuate the area, avoid inhaling fumes, and follow emergency procedures.",
  "what is a terrorist attack": "A terrorist attack is a violent act intended to create fear and achieve political or ideological goals.",
  "what should I do during a terrorist attack": "During a terrorist attack, follow the 'Run, Hide, Tell' protocol: run to safety, hide if you can't run, and inform authorities.",
  "what is a fire hazard": "A fire hazard is any condition that increases the likelihood of a fire occurring.",
  "what should I do during a fire": "During a fire, evacuate immediately, use stairs instead of elevators, and call emergency services.",

  // Preparedness
  "how can I prepare for a disaster": "You can prepare for a disaster by creating an emergency kit, making a family communication plan, and staying informed about local risks.",
  "what should be in an emergency kit": "An emergency kit should include water, non-perishable food, a flashlight, batteries, a first aid kit, medications, and important documents.",
  "what is a family communication plan": "A family communication plan outlines how family members will contact each other and where they will meet during a disaster.",
  "how can I stay informed during a disaster": "Stay informed by listening to local news, using weather apps, and signing up for emergency alerts.",
  "what is an evacuation plan": "An evacuation plan is a strategy for safely leaving a building or area during an emergency.",
  "how do I create an evacuation plan": "To create an evacuation plan, identify escape routes, designate meeting points, and practice the plan with your family.",

  // Response
  "what is first aid": "First aid is the immediate assistance given to someone who is injured or ill until full medical treatment is available.",
  "how do I perform CPR": "To perform CPR, place the heel of your hand on the center of the chest, push hard and fast, and give rescue breaths if trained.",
  "what should I do if someone is bleeding": "If someone is bleeding, apply direct pressure to the wound with a clean cloth and elevate the injured area if possible.",
  "what should I do if someone is choking": "If someone is choking, perform the Heimlich maneuver by standing behind them and applying upward pressure on their abdomen.",
  "what should I do if someone is unconscious": "If someone is unconscious, check for breathing, call emergency services, and perform CPR if necessary.",

  // Recovery
  "what is disaster recovery planning": "Disaster recovery planning involves creating strategies to restore operations and infrastructure after a disaster.",
  "how can communities recover from disasters": "Communities can recover from disasters by rebuilding infrastructure, providing mental health support, and implementing long-term mitigation measures.",
  "what is psychological first aid": "Psychological first aid involves providing emotional support and reducing stress for disaster survivors.",
  "how can I help after a disaster": "You can help after a disaster by donating to relief organizations, volunteering, or providing support to affected individuals.",

  // Mitigation
  "what is disaster risk reduction": "Disaster risk reduction involves efforts to minimize vulnerabilities and disaster risks through prevention and preparedness.",
  "how can we reduce the impact of floods": "Flood impact can be reduced by building flood barriers, improving drainage systems, and relocating vulnerable communities.",
  "how can we reduce the impact of earthquakes": "Earthquake impact can be reduced by constructing earthquake-resistant buildings and enforcing building codes.",
  "what is early warning system": "An early warning system is a technology used to detect and warn about impending disasters.",
  "how do early warning systems work": "Early warning systems use sensors, data analysis, and communication networks to alert people about potential disasters.",

  // Organizations and Agencies
  "what is the role of FEMA": "FEMA (Federal Emergency Management Agency) coordinates disaster response and recovery efforts in the United States.",
  "what is the role of the Red Cross": "The Red Cross provides emergency assistance, disaster relief, and education in the United States and worldwide.",
  "what is the role of WHO in disaster management": "WHO (World Health Organization) provides technical support and coordinates health responses during disasters.",
  "what is the role of UNDRR": "UNDRR (United Nations Office for Disaster Risk Reduction) works to reduce disaster risks and build resilient communities.",

  // Miscellaneous
  "what is a disaster recovery center": "A disaster recovery center is a facility where disaster survivors can access information, resources, and support services.",
  "what is a disaster declaration": "A disaster declaration is an official statement by a government that a disaster has occurred and requires emergency response.",
  "what is the Sendai Framework": "The Sendai Framework is a global plan to reduce disaster risks and losses adopted by the United Nations.",
  "what is community resilience": "Community resilience is the ability of a community to withstand and recover from disasters.",
  "how can I volunteer in disaster management": "You can volunteer by joining organizations like the Red Cross, local emergency response teams, or community disaster preparedness programs.",
  
// More on Natural Disasters
  "what is a landslide": "A landslide is the movement of rock, earth, or debris down a slope.",
  "what should I do during a landslide": "During a landslide, move away from the path of the slide and seek higher ground.",
  "what is a drought": "A drought is a prolonged period of abnormally low rainfall, leading to water shortages.",
  "what should I do during a drought": "During a drought, conserve water, fix leaks, and follow local water restrictions.",
  "what is a heatwave": "A heatwave is a prolonged period of excessively hot weather.",
  "what should I do during a heatwave": "During a heatwave, stay hydrated, avoid outdoor activities, and use fans or air conditioning.",

  // More on Man-Made Disasters
  "what is a cyber attack": "A cyber attack is an attempt to damage or disrupt computer systems or networks.",
  "what should I do during a cyber attack": "During a cyber attack, disconnect from the internet, update your software, and report the incident.",
  "what is a biological disaster": "A biological disaster involves the release of pathogens or toxins that can cause disease.",
  "what should I do during a biological disaster": "During a biological disaster, follow quarantine guidelines, practice good hygiene, and seek medical help if needed.",

  // More on Preparedness
  "what is a disaster preparedness drill": "A disaster preparedness drill is a practice exercise to test emergency plans and procedures.",
  "how often should I update my emergency kit": "You should update your emergency kit every six months to ensure supplies are fresh and functional.",
  "what is a shelter-in-place order": "A shelter-in-place order instructs people to stay indoors during an emergency.",
  "what should I do during a shelter-in-place order": "During a shelter-in-place order, stay indoors, close all windows and doors, and listen to official updates.",

  // More on Recovery
  "what is disaster debris management": "Disaster debris management involves the safe removal and disposal of debris after a disaster.",
  "how can I rebuild my home after a disaster": "You can rebuild your home by hiring licensed contractors, following building codes, and using disaster-resistant materials.",
  "what is disaster insurance": "Disaster insurance provides financial protection against losses caused by disasters.",
      "how can I apply for disaster assistance": "You can apply for disaster assistance through government agencies like FEMA or local relief organizations.",
  
     "what is disaster risk assessment": "Disaster risk assessment is the process of identifying, analyzing, and evaluating the risks associated with disasters.",
  "what is a hazard map": "A hazard map is a visual representation of areas at risk of specific hazards, such as floods, earthquakes, or landslides.",
  "what is vulnerability assessment": "Vulnerability assessment is the process of identifying and evaluating the susceptibility of communities or infrastructure to disasters.",
  "what is capacity building in disaster management": "Capacity building involves strengthening the skills, resources, and abilities of individuals and organizations to manage disasters effectively.",
  "what is disaster governance": "Disaster governance refers to the policies, institutions, and processes that guide disaster management efforts.",
  "what is a disaster management plan": "A disaster management plan is a documented strategy outlining how an organization or community will respond to disasters.",
  "what is disaster resilience": "Disaster resilience is the ability of a community or system to withstand, adapt to, and recover from disasters.",
  "what is the role of technology in disaster management": "Technology plays a crucial role in disaster management through early warning systems, GIS mapping, and communication tools.",
  "what is the role of social media in disaster management": "Social media is used for real-time communication, sharing information, and coordinating relief efforts during disasters.",
  "what is the role of drones in disaster management": "Drones are used for search and rescue, damage assessment, and delivering supplies in disaster-affected areas.",

  // Global Perspectives on Disaster Management
  "what is the Hyogo Framework": "The Hyogo Framework for Action is a global plan for disaster risk reduction adopted by the United Nations in 2005.",
  "what is the Sendai Framework": "The Sendai Framework is a global plan to reduce disaster risks and losses, adopted by the United Nations in 2015.",
  "what is the role of the United Nations in disaster management": "The United Nations coordinates international disaster response, provides technical assistance, and promotes disaster risk reduction.",
  "what is the role of the World Bank in disaster management": "The World Bank provides financial and technical support for disaster risk reduction and recovery projects.",
  "what is the role of NGOs in disaster management": "NGOs provide emergency relief, support recovery efforts, and promote community resilience.",
  "what is the role of the military in disaster management": "The military assists in disaster response by providing logistics, search and rescue, and medical support.",
  "what is the role of local governments in disaster management": "Local governments are responsible for implementing disaster plans, coordinating response efforts, and supporting affected communities.",

  // Case Studies in Disaster Management
  "what was the impact of Hurricane Katrina": "Hurricane Katrina (2005) caused widespread devastation in the Gulf Coast of the United States, highlighting the need for better disaster preparedness and response.",
  "what was the impact of the 2004 Indian Ocean tsunami": "The 2004 Indian Ocean tsunami killed over 230,000 people and led to global efforts to improve early warning systems.",
  "what was the impact of the 2011 Tohoku earthquake and tsunami": "The 2011 Tohoku earthquake and tsunami in Japan caused a nuclear disaster and highlighted the importance of disaster-resistant infrastructure.",
  "what was the impact of the 2010 Haiti earthquake": "The 2010 Haiti earthquake killed over 200,000 people and underscored the need for effective disaster response and recovery.",
  "what was the impact of the 2019-2020 Australian bushfires": "The Australian bushfires burned over 18 million hectares, destroyed thousands of homes, and emphasized the role of climate change in disasters.",
  "what was the impact of the 2020 Beirut explosion": "The 2020 Beirut explosion caused widespread damage, injuries, and fatalities, highlighting the risks of hazardous materials.",
  "what was the impact of the COVID-19 pandemic": "The COVID-19 pandemic demonstrated the importance of global cooperation, healthcare preparedness, and risk communication in disaster management.",

  // Disaster Management in Specific Regions
  "how does Japan manage earthquakes": "Japan manages earthquakes through strict building codes, early warning systems, and regular disaster drills.",
  "how does the Netherlands manage floods": "The Netherlands manages floods with advanced flood control systems, such as dikes, dams, and storm surge barriers.",
  "how does California manage wildfires": "California manages wildfires through controlled burns, firebreaks, and public awareness campaigns.",
  "how does Bangladesh manage cyclones": "Bangladesh manages cyclones with early warning systems, cyclone shelters, and community preparedness programs.",
  "how does Iceland manage volcanic eruptions": "Iceland manages volcanic eruptions with monitoring systems, evacuation plans, and public education.",

  // Climate Change and Disaster Management
  "how does climate change affect disasters": "Climate change increases the frequency and intensity of disasters, such as hurricanes, floods, and droughts.",
  "what is climate adaptation": "Climate adaptation involves adjusting to the impacts of climate change, such as building flood defenses or drought-resistant crops.",
  "what is climate mitigation": "Climate mitigation involves reducing greenhouse gas emissions to limit the impacts of climate change.",
  "how can disaster management address climate change": "Disaster management can address climate change by integrating climate risks into planning, promoting sustainable practices, and enhancing resilience.",

  // Disaster Communication
  "what is risk communication": "Risk communication involves sharing information about risks and protective actions to help people make informed decisions.",
  "what is crisis communication": "Crisis communication involves providing timely and accurate information during emergencies to guide public response.",
  "what is the role of media in disaster management": "The media plays a key role in disseminating information, raising awareness, and holding authorities accountable during disasters.",
  "what is the role of community leaders in disaster communication": "Community leaders help relay information, build trust, and mobilize local resources during disasters.",

  // Disaster Recovery and Rehabilitation
  "what is post-disaster recovery": "Post-disaster recovery involves restoring infrastructure, livelihoods, and communities after a disaster.",
  "what is post-disaster rehabilitation": "Post-disaster rehabilitation focuses on rebuilding physical, social, and economic systems.",
  "what is the role of insurance in disaster recovery": "Insurance provides financial support to individuals and businesses to rebuild after disasters.",
  "what is the role of mental health in disaster recovery": "Mental health support is crucial for helping survivors cope with trauma and rebuild their lives.",
  "what is the role of education in disaster recovery": "Education helps communities learn from disasters and build resilience for the future.",

  // Disaster Management Tools and Technologies
  "what is GIS in disaster management": "GIS (Geographic Information Systems) is used for mapping hazards, analyzing risks, and planning response efforts.",
  "what is remote sensing in disaster management": "Remote sensing uses satellites and drones to monitor disasters, assess damage, and plan recovery.",
  "what is artificial intelligence in disaster management": "Artificial intelligence is used for predicting disasters, analyzing data, and optimizing response efforts.",
  "what is blockchain in disaster management": "Blockchain is used for transparent and efficient distribution of aid and resources during disasters.",

  // Disaster Management Policies and Frameworks
  "what is the National Disaster Management Authority (NDMA)": "The NDMA is a government agency responsible for disaster management policies and coordination in India.",
  "what is the Disaster Management Act": "The Disaster Management Act is a legal framework for disaster management in countries like India.",
  "what is the role of the International Federation of Red Cross and Red Crescent Societies (IFRC)": "The IFRC provides humanitarian assistance and promotes disaster risk reduction worldwide.",
  "what is the role of the Global Facility for Disaster Reduction and Recovery (GFDRR)": "The GFDRR supports disaster risk reduction and recovery efforts in developing countries.",

  // Miscellaneous
  "what is a disaster recovery team": "A disaster recovery team is a group of professionals responsible for restoring operations after a disaster.",
  "what is a disaster simulation exercise": "A disaster simulation exercise is a practice scenario to test emergency plans and improve preparedness.",
  "what is the role of volunteers in disaster management": "Volunteers assist in search and rescue, relief distribution, and community support during disasters.",
  "what is the role of schools in disaster management": "Schools play a key role in educating students about disaster preparedness and conducting drills.",
  "what is the role of businesses in disaster management": "Businesses contribute to disaster management through corporate social responsibility, donations, and employee volunteering.",


    // More on Climate Change
  "what is the Paris Agreement": "The Paris Agreement is an international treaty to limit global warming and support climate adaptation efforts.",
  "how does deforestation increase disaster risks": "Deforestation increases disaster risks by reducing natural barriers to floods and landslides.",
  "what is the role of renewable energy in disaster management": "Renewable energy reduces dependence on vulnerable energy systems during disasters.",

  // More on Case Studies
  "what was the impact of the 2013 Uttarakhand floods": "The 2013 Uttarakhand floods in India caused widespread destruction and highlighted the need for better disaster preparedness in mountainous regions.",
  "what was the impact of the 2017 Hurricane Maria": "Hurricane Maria devastated Puerto Rico, exposing vulnerabilities in infrastructure and disaster response systems.",
  "what was the impact of the 2018 Kerala floods": "The 2018 Kerala floods in India caused massive displacement and emphasized the importance of community-led disaster response.",

  // More on Tools and Technologies
  "what is the role of big data in disaster management": "Big data is used to analyze trends, predict disasters, and optimize resource allocation.",
  "what is the role of mobile apps in disaster management": "Mobile apps provide real-time alerts, emergency contacts, and disaster preparedness tips.",
  "what is the role of social networks in disaster management": "Social networks facilitate communication, coordination, and information sharing during disasters.",

  // More on Policies
  "what is the role of the National Disaster Response Force (NDRF)": "The NDRF is a specialized force in India for disaster response and rescue operations.",
  "what is the role of the European Union in disaster management": "The EU coordinates cross-border disaster response and provides funding for disaster risk reduction.",
  "what is the role of ASEAN in disaster management": "ASEAN promotes regional cooperation in disaster management through the ASEAN Agreement on Disaster Management and Emergency Response (AADMER).",


};
const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { user: true, text: input };
    setMessages([...messages, userMessage]);

    // Convert input to lowercase for case-insensitive matching
    const userInput = input.toLowerCase();

    // Find a matching predefined response
    const botMessage = {
      user: false,
      text: predefinedResponses[userInput] || "I don't understand. Can you rephrase?",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div style={styles.chatbotContainer}>
      {/* Chatbot Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          {/* Chat Header */}
          <div style={styles.chatHeader}>
            <h3 style={styles.chatTitle}>Chatbot</h3>
          </div>

          {/* Chat Messages */}
          <div style={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.messageBubble,
                  ...(msg.user ? styles.userMessage : styles.botMessage),
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.inputField}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

// CSS Styles
const styles = {
  chatbotContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  toggleButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chatWindow: {
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatHeader: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  chatTitle: {
    margin: 0,
    fontSize: "18px",
  },
  messagesContainer: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: "8px 12px",
    borderRadius: "10px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  userMessage: {
    backgroundColor: "#007bff",
    color: "#fff",
    marginLeft: "auto",
  },
  botMessage: {
    backgroundColor: "#e0e0e0",
    color: "#000",
    marginRight: "auto",
  },
  inputContainer: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 1,
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginRight: "10px",
    fontSize: "14px",
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
};