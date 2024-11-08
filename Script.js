   window.addEventListener("load", function() {
     const loader = document.getElementById("loader");
     const mainContent = document.getElementById("page");

     // Check if the user has already visited in this session
     if (!sessionStorage.getItem("visited")) {
       // First visit, show loader
       sessionStorage.setItem("visited", "true");

       // Show loader and hide main content initially
       loader.style.display = "block";
       mainContent.style.display = "none";

       // Hide loader after delay
       setTimeout(() => {
         loader.style.display = "none";
         mainContent.style.display = "block";
       }, 3000); // Adjust delay as needed
     } else {
       // If already visited, skip the loader and show main content directly
       loader.style.display = "none";
       mainContent.style.display = "block";
     }
   });

   const tracks = [
     { name: "Sunflower", artist: "Malone and Swae Lee", src: "Sunflower-(Spider-Man_-Into-The-Spider-Verse)(PagalNew.Com.Se).mp3", photo: "download.jpeg" },
     { name: "Heat Waves", artist: "Glass Animal", src: "Heat-Waves(Pagal-World.Com.In).mp3", photo: "ab67616d0000b273712701c5e263efc8726b1464.jpeg" },
     { name: "7 Years", artist: "Lukas Graham", src: "7-Years(PagalWorlld.Com).mp3", photo: "ab67616d0000b2732d94d0f04e9a58d1654b760b.jpeg" },
     { name: "The Nights", artist: "Avicii", src: "The-Nights---Avicii(PagalNew.Com.Se).mp3", photo: "ab67616d0000b2730ae4f4d42e4a09f3a29f64ad.jpeg" },

      // Add more tracks here
    ];

   const container = document.getElementById("container");
   let currentTrackIndex = 0; // Track the currently playing card index
   let audio = new Audio(tracks[currentTrackIndex].src);

   // Function to load and play a track by index
   function loadAndPlayTrack(index) {
     audio.src = tracks[index].src;
     audio.play();
     updateCardDisplay(index);
   }

   // Function to update displayed track details on each card
   function updateCardDisplay(index) {
     document.querySelectorAll(".music-player-card").forEach((card, i) => {
       card.classList.toggle("active", i === index); // Add 'active' class for styling if needed
       const playPauseBtn = card.querySelector(".play-pause");
       playPauseBtn.textContent = i === index && !audio.paused ? "pause" : "play_arrow";
     });
   }

   tracks.forEach((track, index) => {
     const card = document.createElement("div");
     card.classList.add("music-player-card");

     card.innerHTML = `
        <img src="${track.photo}" alt="Track photo" class="track-photo">
        <div class="track-info">
          <p class="track-name">${track.name}</p>
          <p class="track-artist">${track.artist}</p>
        </div>

        <div class="controls">
          <span class="material-icons prev" data-index="${index}">skip_previous</span>
          <span class="material-icons play-pause" data-index="${index}">play_arrow</span>
          <span class="material-icons next" data-index="${index}">skip_next</span>
        </div>
                <div class="timeline-container">
          <span class="time" id="current-time-${index}">00:00</span>
          <input type="range" class="timeline" id="timeline-${index}" value="0" max="100">
          <span class="time" id="total-time-${index}">00:00</span>
        </div>
      `;

     container.appendChild(card);

     const playPauseBtn = card.querySelector(".play-pause");
     const prevBtn = card.querySelector(".prev");
     const nextBtn = card.querySelector(".next");
     const timeline = document.getElementById(`timeline-${index}`);
     const currentTime = document.getElementById(`current-time-${index}`);
     const totalTime = document.getElementById(`total-time-${index}`);

     audio.addEventListener("loadedmetadata", () => {
       totalTime.textContent = formatTime(audio.duration);
       timeline.max = audio.duration;
     });

     function formatTime(seconds) {
       const minutes = Math.floor(seconds / 60);
       const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
       return `${minutes}:${secs}`;
     }

     // Play/Pause Toggle
     playPauseBtn.addEventListener("click", () => {
       if (currentTrackIndex !== index) {
         currentTrackIndex = index;
         loadAndPlayTrack(currentTrackIndex);
       } else {
         if (audio.paused) {
           audio.play();
           playPauseBtn.textContent = "pause";
         } else {
           audio.pause();
           playPauseBtn.textContent = "play_arrow";
         }
       }
       updateCardDisplay(currentTrackIndex);
     });

     // Previous Track
     prevBtn.addEventListener("click", () => {
       currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
       loadAndPlayTrack(currentTrackIndex);
     });

     // Next Track
     nextBtn.addEventListener("click", () => {
       currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
       loadAndPlayTrack(currentTrackIndex);
     });

     // Update Timeline and Current Time
     audio.addEventListener("timeupdate", () => {
       if (currentTrackIndex === index) {
         const progress = (audio.currentTime / audio.duration) * 100;
         timeline.value = progress || 0;
         currentTime.textContent = formatTime(audio.currentTime);
       }
     });

     // Seek Track

   });

   // Load the first track on page load
   loadAndPlayTrack(currentTrackIndex);


   //movie code is here
   const movies = [
     {
       title: "Cars",
       type: "Animation, Adventure , Fantasy",
       description: "The movie is about Lightning McQueen, a racecar who is on his way to California where he is scheduled to race for the Piston Cup. He gets lost on his way and finds himself in Radiator Springs, a fictional town on Route 66,where he know the meaning of friendship",
       img: "p159400_p_v12_ai.jpg",
       streaming: [
        "download (5).jpeg",
        "apps.62011.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.20cc8541-b434-4bab-9c83-0e1ed1d9d1dc.jpg"
      ],
       cast: [
        "download (4).jpeg",
        "images (1).jpeg",
        "images (2).jpeg"
      ]
    },
     {
       title: "Prince of Persia",
       type: "Action , Adventure , Fantasy , Games",
       description: "In Alamut, the Sands of Time grants mortals the power to reverse time. Dastan (Jake Gyllenhaal), the adopted prince of Persia, acquires a magical dagger that unlocks this power. Accused of his father’s murder, Dastan flees with Princess Tamina (Gemma Arterton). Together, they must guard the Sands from dark forces and uncover the king's true assassin.",
       img: "p3546197_p_v10_av.jpg",
       streaming: [
        "download (5).jpeg",
        "apps.62011.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.20cc8541-b434-4bab-9c83-0e1ed1d9d1dc.jpg"
      ],
       cast: [
        "images (3).jpeg",
        "Gemma_Arterton_at_The_Prince's_Trust_Awards_(cropped).jpg",
        "MV5BOTU2Njg2NzM4M15BMl5BanBnXkFtZTgwNjYwNjQwMTI@._V1_FMjpg_UX1000_.jpg"
      ]
    }, {
       title: "Iron Man",
       type: "Action , Sci-fi , Fantasy",
       description: "Iron Man tells the story of Tony Stark, a wealthy inventor who, after being captured by terrorists, creates a powerful suit of armor to escape. Inspired to fight for justice, he becomes the superhero Iron Man, using his technology to protect humanity and seek redemption for his past actions.",
       img: "MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
       streaming: [
        "download (5).jpeg",
        "apps.62011.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.20cc8541-b434-4bab-9c83-0e1ed1d9d1dc.jpg"
      ],
       cast: [
        "images (4).jpeg",
        "330px-GwynethPaltrowByAndreaRaffin2011.jpg",
        "licensed-image.webp"
      ]
    },
    
  ];

   function createMovieCard(movie) {
     const movieCard = document.createElement('div');
     movieCard.className = 'movie-card';

     movieCard.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="movie-overlay">
        <div class="movie-title">${movie.title}</div>
        <div class="movie-type">${movie.type}</div>
        <div class="movie-streaming">
          ${movie.streaming.map(url => `<img src="${url}" alt="streaming platform">`).join('')}
        </div>
        <div class="movie-info">
          <div class="movie-description">${movie.description}</div>
          <div class="movie-cast">
            ${movie.cast.map(url => `<img src="${url}" alt="cast member">`).join('')}
          </div>
        </div>
      </div>
    `;
     return movieCard;
   }

   const movieContainer = document.getElementById('movie-container');
   movies.forEach(movie => movieContainer.appendChild(createMovieCard(movie)));
   const series = [
     {
       title: "Money Heist",
       type: "Heist, Crime drama",
       description: "A gripping story of J. Robert Oppenheimer, the brilliant physicist whose work on the atomic bomb shaped modern history.",
       img: "81WSF164GOL._AC_UF894,1000_QL80_ (1).jpg",
       streaming: [
        "360773-1520262091652-fa603e15cdcd2.jpg"
      ],
       cast: [
        "MV5BYTZkNGI5N2UtYWI4MC00ZjNhLWE2NTAtMjQwZDkxMTE1YzAzXkEyXkFqcGc@._V1_.jpg",
        "images (6).jpeg",
        "hq720.jpg"
      ]
    },
    
     {
       title: "Loki",
       type: " Action-adventure , Procedural drama , Science fiction",
       description: "A mind-bending thriller about a thief who infiltrates dreams to steal secrets.",
       img: "tumblr_4d539e62c0251f7cb3603c472571b62b_7273e44c_500.png",
       streaming: [
               "download (5).jpeg",

      ],
       cast: [
        "images.webp",
        "images (1).webp",
        "images (7).jpeg"
      ]
    },
     {
       title: "Last of us",
       type: " Post-apocalyptic , Drama",
       description: "The story follows Joel, a smuggler hired to escort a teenage girl, Ellie, across a post-apocalyptic United States, where they encounter other survivors and dangerous infected mutants..",
       img: "images (5).jpeg",
       streaming: [
               "download (5).jpeg",

      ],
       cast: [
        "210401_gma_digital_pedro_pascal_hpMain_1x1_992.jpg",
        "images (8).jpeg",
        "images (9).jpeg"
      ]
    }
  ];

   function createSeriesCard(series) {
     const seriesCard = document.createElement('div');
     seriesCard.className = 'series-card';

     seriesCard.innerHTML = `
      <img src="${series.img}" alt="${series.title}">
      <div class="series-overlay">
        <div class="series-title">${series.title}</div>
        <div class="series-type">${series.type}</div>
        <div class="series-streaming">
          ${series.streaming.map(url => `<img src="${url}" alt="streaming platform">`).join('')}
        </div>
        <div class="series-info">
          <div class="series-description">${series.description}</div>
          <div class="series-cast">
            ${series.cast.map(url => `<img src="${url}" alt="cast member">`).join('')}
          </div>
        </div>
      </div>
    `;
     return seriesCard;
   }

   const seriesContainer = document.getElementById('series-container');
   series.forEach(series => seriesContainer.appendChild(createSeriesCard(series)));


   document.getElementById("feedbackForm").addEventListener("submit", function(event) {
     event.preventDefault();

     // Disable the button to prevent multiple clicks
     const submitButton = event.target.querySelector("button");
     submitButton.disabled = true;

     emailjs.sendForm("service_tarn2d6", "template_2doq8z7", this)
       .then(function(response) {
         const alertDiv = document.getElementById("alert");
         alertDiv.className = "alert success";
         alertDiv.textContent = "Feedback sent successfully! Thank you for sending feedback.";
         alertDiv.style.display = "block";

         // Clear form fields
         document.getElementById("feedbackForm").reset();

         // Re-enable button after 3 seconds
         setTimeout(() => {
           submitButton.disabled = false;
           alertDiv.style.display = "none"; // Hide alert after displaying
         }, 3000);

       }, function(error) {
         const alertDiv = document.getElementById("alert");
         alertDiv.className = "alert error";
         alertDiv.textContent = "Failed to send feedback. Please try again.";
         alertDiv.style.display = "block";

         // Re-enable button after 3 seconds
         setTimeout(() => {
           submitButton.disabled = false;
           alertDiv.style.display = "none"; // Hide alert after displaying
         }, 3000);
       });
   });
  document.getElementById("year").textContent = new Date().getFullYear();
  function showPopup() {
            document.getElementById('popup-overlay').style.display = 'flex';
        }

        // Function to close the pop-up
        function closePopup() {
            document.getElementById('popup-overlay').style.display = 'none';
        }

        // Event listener for the Gallery link
        document.getElementById('gallery-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default link behavior
            showPopup(); // Shows the pop-up
        });
        document.getElementById('gallery-link-2').addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default link behavior
            showPopup(); // Shows the pop-up
            });
    // Track clicks on the image
    const image = document.getElementById('hiddenLinkImage');
    let clickCount = 0;
    const secretCode = "1234"; // Set your desired code here

    image.addEventListener('click', () => {
      clickCount++;

      // Check if clicked 9 times
      if (clickCount === 9) {
        const userCode = prompt("Enter the access code to proceed:");

        // Verify the entered code
        if (userCode === secretCode) {
          window.location.href = 'https://www.google.co.in/'; // Replace with your desired link
        } else {
          alert("Incorrect code. Please try again.");
          clickCount = 0; // Reset click count if code is incorrect
        }
      }
    });
