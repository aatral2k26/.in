/* ================================================================
   AATRAL 2K26 — Shared Config & Event Data
================================================================ */

const CFG = {
  eventDate: new Date("2026-03-17T09:00:00"),
  fee: 250,
  upi: "earjun018@okicici",
  // ↓ Replace with your deployed Google Apps Script URL
  apiUrl:
    "https://script.google.com/macros/s/AKfycbxBDs9uToZrg1yYElZ8csHTMM4zamvrXmqCtXVyDoN1QUpedy3VCMVZE3lJiheKUz9o/exec",
  // ↓ Cloudinary settings from your dashboard
  cloudinaryCloudName: "dcn3rn9dv",
  cloudinaryUploadPreset: "aatral",
};

const EVTS = {
  tech: [
    {
      id:'paper-nova', name:'Paper NOVA', icon:'📄',
      tag:'Present your research. Win with innovation.',
      size:'1–3 Members', prize:'Cash Prize',
      format:{team:'1 to 3 members',rounds:'Round 1: Abstract (250 words PDF) → Round 2: Live Presentation',duration:'7 min presentation + 3 min Q&A',mode:'On-site with pre-screening'},
      desc:'Paper NOVA is a prestigious paper presentation contest open to all undergraduate engineering students. Teams first submit a 250-word abstract for screening. Shortlisted teams present their research live. On-spot registered students can also participate directly in Round 2.',
      rules:['Eligibility: All undergraduate engineering students.','Abstract: Max 250 words, PDF format, include title and team info.','Shortlisted teams notified within 48 hours via email.','Presentation: 7 minutes slides (warning at 6 min) + 3 min Q&A.','Use Microsoft PowerPoint only.','On-spot participants can join directly in Round 2.','Judges\' decisions are final and binding.'],
      judging:[['Innovation & Problem Selection','25'],['Depth of Research & Technical Accuracy','30'],['Presentation Skills & Slide Quality','25'],['Q&A Handling','20'],['Total','100 Points']],
    },
    {
      id:'electra-xpo', name:'ElectraXpo', icon:'⚡',
      tag:'Showcase working models. Pitch your innovation.',
      size:'1–3 Members', prize:'Cash Prize',
      format:{team:'1 to 3 members',entry:'Direct entry — all registered teams display on event day',setup:'Arrive 60 mins before event for setup',duration:'3–5 min elevator pitch to judges'},
      desc:'ElectraXpo is a project expo where teams showcase working hardware/software prototypes at dedicated stalls. Judges circulate and evaluate each project. At least one member must be present at the stall throughout. Software projects must include a live demo (videos only as backup).',
      rules:['Eligibility: All undergraduate engineering students, any discipline.','Teams must bring their own hardware/prototypes/software.','Basic power sockets and tables provided. Special needs must be requested 48 hours in advance.','Display space provided with A1/A2 poster recommended.','Software projects: live demo mandatory, video only as backup.','At least one team member must be at the stall at all times.','Setup Time: Arrive 60 minutes before event start.'],
      judging:[['Working Prototype','35'],['Complexity of the Project','25'],['Scalability of the Idea','20'],['Technical Knowledge','20'],['Total','100 Points']],
    },
    {
      id:'mind-matrix', name:'Mind Matrix', icon:'🧠',
      tag:'20 questions. 20 minutes. No guessing.',
      size:'Individual', prize:'Cash Prize',
      format:{team:'Individual participation',questions:'20 Questions (MCQ + Numerical)',duration:'20 Minutes',mode:'Written answer on provided question paper'},
      desc:'Mind Matrix is a fast-paced technical quiz designed to challenge participants on core concepts of Electrical and Electronics Engineering. It tests both depth of understanding and quick thinking under time pressure. All participants will be provided a question paper and must bring their own pen.',
      rules:['Individual participation only.','20 questions: Multiple-choice and Numerical.','Duration: 20 minutes strictly.','Each correct answer: 1 point. No negative marking.','All participants will be provided question papers.','Participants must bring their own pen.','Answers must be submitted within allotted time.'],
      judging:null,
    },
    {
      id:'circuit-craft', name:'Circuit Craft', icon:'🛠️',
      tag:'Design from memory. No references allowed.',
      size:'Individual', prize:'Cash Prize',
      format:{team:'Individual participation',topic:'Functional problem announced at event start',duration:'20 Minutes',materials:'Blank A4 sheets provided — bring own pens, pencils, scales'},
      desc:'Circuit Craft is a theoretical design competition where participants draw a complete, technically accurate circuit diagram from memory based on a given functional goal. No references, no phones, no textbooks — pure knowledge and skill on paper.',
      rules:['Individual event only.','Topic: A functional circuit problem is announced at the start.','Duration: 20 minutes strictly.','Materials: Blank A4 sheets provided. Bring your own pens, pencils, and scales.','All components must use standard IEEE/IEC symbols.','ICs and transistors: pin numbers and terminal labels (B/C/E) must be clearly marked.','Diagram must include a clearly labeled power source (VCC/GND or Battery).','No textbooks, mobile phones, or reference sheets allowed.','Circuit must be drawn entirely from memory.'],
      judging:null,
    },
  ],
  nontech: [
    {
      id:'three-leg', name:'Three Legged Race', icon:'🏃',
      tag:'Tie up. Sync up. Sprint to glory.',
      size:'2 Members', prize:'Prize',
      format:{team:'Exactly 2 members',mode:'Outdoor race',rounds:'Heats + Finals'},
      desc:'The Three-Legged Race is a fun event where two participants tie one leg together and race to the finish line. Coordination, balance, and teamwork are key.',
      rules:['Exactly 2 members per team.','Right leg of one tied to left leg of the other.','Both participants must cross the finish line together.','The rope must not be untied during the race.','No pushing, tripping, or obstructing other teams.','Multiple heats — top teams advance to the final.'],
      judging:null,
    },
    {
      id:'treasure', name:'Treasure Hunt', icon:'🗺️',
      tag:'Solve clues. Find the treasure. Win.',
      size:'2–3 Members', prize:'Prize',
      format:{team:'2 to 3 members',rounds:'One round — campus wide',mode:'Clue-based chase'},
      desc:'Treasure Hunt is a campus-wide adventure where teams receive the first clue and must solve it to find the next location. Fastest team wins!',
      rules:['Team size: 2 to 3 members.','Teams must stay together throughout the hunt.','Clues must not be shared with or stolen from other teams.','All team members must be present at the final treasure location.','Mobile phones allowed for maps only — not for internet clue-solving.','No disturbing or vandalizing college property.'],
      judging:null,
    },
    {
      id:'quick-grab', name:'Quick Grab', icon:'🖐️',
      tag:'Head. Shoulders. Knees. BALL!',
      size:'Team vs Team', prize:'Prize',
      format:{team:'Two teams compete head-to-head',rounds:'2 Rounds',mode:'Reaction + reflex challenge'},
      desc:'Quick Grab — Two teams face off as the judge shouts body parts and players must quickly touch them. When the judge shouts "Ball!" — grab it first!',
      rules:['One participant from each team stands near a ball in the center.','The judge calls out "touch your head/shoulders/knees/legs" — players must follow.','On "Ball!" — grab the ball and run back to your team; first one scores a point.','Game has 2 rounds; team with highest total points wins.','Judge\'s decision is final.'],
      judging:null,
    },
    {
      id:'dumb-char', name:'Dumb Charades', icon:'🎬',
      tag:'Guess movies, memes & dialogues from pictures.',
      size:'2–3 Members', prize:'Prize',
      format:{team:'2 to 3 members',rounds:'2 Rounds',duration:'Time limit per question',mode:'Picture-based guessing'},
      desc:'Dumb Charades with a twist! Instead of acting, teams guess movies, songs, memes, and famous dialogues by looking at pictures.',
      rules:['Team size: 2 to 3 members.','Round 1: Guess the movie/song from picture clues.','Round 2: Identify memes and famous movie dialogues from pictures.','Each question has a time limit — unanswered questions score zero.','No use of mobile phones during the game.'],
      judging:null,
    },
  ],
};
