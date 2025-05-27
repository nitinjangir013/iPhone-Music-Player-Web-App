$(document).ready(function() {
    // Add function to update the current time in the status bar
    function updateCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        
        // Convert to 12-hour format
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        $('.time').text(formattedTime);
    }

    // Update time immediately and then every second
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    // Sample music data
    const musicList = [        
        {
            title: "Shaky",
            artist: "Bollywood Hits",
            cover: "https://pagalall.com/wp-content/uploads/Shaky-Sanju-Rathod-Isha-Malviya-pagalall.com_.jpg.webp",
            audio: "https://pagalall.com/wp-content/uploads/all/Shaky Sanju Rathod, Isha Malviya (pagalall.com).mp3"
        },
        {
            title: "Shaam Bhi Khoob Hai",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/karz-darshan.webp",
            audio: "https://pendujatt.com.se/load/1034147/141075/Sham%20Bhi%20Khub%20Hai.mp3"
        },
        {
            title: "Dil Le Gayee",
            artist: "Bollywood Hits",
            cover: "https://a10.gaanacdn.com/gn_img/albums/qaLKY623pO/aLKY8vdwbp/size_l.webp",
            audio: "https://pendujatt.com.se/load/20445771/621105/Dil%20Le%20Gayee.mp3"
        },
        {
            title: "Ek Nigah Mein",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/90s-evergreen-romantic-songs-with-jhankar-beats-various-artists.webp",
            audio: "https://pendujatt.com.se/load/11481488/10343/Ek%20Nigah%20Mein%20-%20Jhankar%20Beats.mp3"
        },
        {
            title: "Utha Le Jaoonga",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/yeh-dil-aashiqana-nadeem-shravan.webp",
            audio: "https://pendujatt.com.se/load/53259403/10661/Utha%20Le%20Jaoonga.mp3"
        },
        {
            title: "Ikrar Ho Na Jaye",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/ikrar-ho-na-jaye-dj.webp",
            audio: "https://pendujatt.com.se/load/56336618/1494447/Ikrar%20Ho%20Na%20Jaye%20-%20Dj%20Mix.mp3"
        },
        {
            title: "Hamne Tumko Dil Ye De Diya",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/ishq-hai-tumse-original-motion-picture-soundtrack-himesh-reshammiya.webp",
            audio: "https://pendujatt.com.se/song/hamne-tumko-dil-ye-de-diya-anand-mp3-song#"
        },
        {
            title: "Chand Se Parda Kijiye",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/aao-pyar-karen-aadesh-shrivastava.webp",
            audio: "https://pendujatt.com.se/load/1017871/127022/Chand%20Se%20Parda%20Kijiye.mp3"
        },
        {
            title: "PAA LIYA HAIN PYAR TERA",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/hits-of-anand-raj-anand-anand-raaj-anand.webp",
            audio: "https://pendujatt.com.se/load/51348893/518180/Paa%20Liya%20Hain%20Pyar%20Tera.mp3"
        },
        {
            title: "Dil Laga Liya Maine",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/dil-hai-tumhaara-nadeem-shravan.webp",
            audio: "https://pendujatt.com.se/load/53260145/10286/Dil%20Laga%20Liya%20Maine.mp3"
        },
        {
            title: "Pyar To Hota Hai Pyar",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/best-of-alka-yagnik-various-artists.webp",
            audio: "https://pendujatt.com.se/load/25880948/290029/Pyar%20To%20Hota%20Hai%20Pyar.mp3"
        },
        {
            title: "College Ki Ladkiyon",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/yeh-dil-aashiqana-nadeem-shravan.webp",
            audio: "https://pendujatt.com.se/load/53259403/10656/College%20Ki%20Ladkiyon.mp3"
        },
        {
            title: "Kyaa Dil Ne Kahaa",
            artist: "Bollywood Hits",
            cover: "https://pendujatt.com.se/uploads/album/cafe-classics-vol-2-love-duets-various-artists.webp",
            audio: "https://pagalfree.com/musics/128-Kyaa Dil Ne Kahaa - Kyaa Dil Ne Kahaa 128 Kbps.mp3"
        },
        {
            title: "Hum To Tujhse Mohabbat Karte",
            artist: "Bollywood Hits",
            cover: "https://koshalworld.com/siteuploads/thumb/sft55/27396_4.jpg",
            audio: "https://koshalworld.com/files/download/id/27396"
        },
        {
            title: "Dil Diwana khata pyaar kar",
            artist: "Bollywood Hits",
            cover: "https://koshalworld.com/siteuploads/thumb/c/103_4.jpg",
            audio: "https://raag.fm/files/mp3/128/Hindi/1030141/Dil Dewana Kehta - (Raag.Fm).mp3"
        },
        {
            title: "Hello Brother",
            artist: "Bollywood Hits",
            cover: "https://pagalfree.com/images/128Hello Brother - Hello Brother 128 Kbps.jpg",
            audio: "https://pagalfree.com/musics/128-Hello Brother - Hello Brother 128 Kbps.mp3"
        },
        {
            title: "Tu Jo Hans Hans Ke",
            artist: "Raja Bhaiya",
            cover: "https://pendujatt.com.se/uploads/album/raja-bhaiya-various-artists.webp",
            audio: "https://pendujatt.com.se/load/1114617/8811/Tu%20Jo%20Hans%20Hans%20Ke.mp3"
        }
    ];

    // Audio element
    const audio = new Audio();
    let currentSongIndex = 0;
    let isPlaying = false;
    let isMuted = false;
    let prevVolume = 0.9;
    let repeatMode = 'all'; // 'none', 'one', 'all' - शुरू में 'all' सेट करें

    // Initialize player
    function initPlayer() {
        // Populate music list
        populateMusicList();
        
        // Load first song
        loadSong(currentSongIndex);
        
        // Update volume based on slider
        audio.volume = $('#volume-slider').val() / 100;
        
        // Initially pause the music wave animation
        stopMusicWaveAnimation();
    }

    // Populate music list
    function populateMusicList() {
        const $musicList = $('.music-list-items');
        $musicList.empty();
        
        musicList.forEach((song, index) => {
            const $songItem = $(`
                <li class="song-item ${index === currentSongIndex ? 'active' : ''}" data-index="${index}">
                    <div class="flex items-center w-full">
                        <div class="w-10 h-10 rounded overflow-hidden mr-3">
                            <img src="${song.cover}" alt="${song.title}" title="${song.title}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-1">
                            <h4 class="text-white text-sm font-medium truncate" title="${song.title}">${song.title}</h4>
                            <p class="text-gray-400 text-xs truncate">${song.artist}</p>
                        </div>
                        <div class="w-8 text-right">
                            <span class="text-gray-400 text-xs">3:45</span>
                        </div>
                    </div>
                </li>
            `);
            
            $musicList.append($songItem);
        });
    }

    // Load song
    function loadSong(index) {
        const song = musicList[index];
        currentSongIndex = index;
        
        // Update song details
        $('#song-title').text(song.title);
        $('#artist-name').text(song.artist);
        $('#album-art').attr('src', song.cover);
        
        // Update audio source
        audio.src = song.audio;
        audio.load();
        
        // Update active song in list
        $('.song-item').removeClass('active');
        $(`.song-item[data-index="${index}"]`).addClass('active');
        
        // Reset progress
        updateProgress();
        
        // If was playing, play the new song
        if (isPlaying) {
            playSong();
        }
    }

    // Play song
    function playSong() {
        audio.play();
        isPlaying = true;
        $('#play-btn i').removeClass('fa-play').addClass('fa-pause');
        startAlbumRotation();
        startMusicWaveAnimation();
    }

    // Pause song
    function pauseSong() {
        audio.pause();
        isPlaying = false;
        $('#play-btn i').removeClass('fa-pause').addClass('fa-play');
        stopAlbumRotation();
        stopMusicWaveAnimation();
    }

    // Start album rotation animation
    function startAlbumRotation() {
        $('.album-cover-inner').css('animation', 'rotate 20s linear infinite');
    }

    // Stop album rotation animation
    function stopAlbumRotation() {
        $('.album-cover-inner').css('animation', 'none');
    }

    // Start music wave animation
    function startMusicWaveAnimation() {
        $('.music-wave span').css('animation-play-state', 'running');
    }

    // Stop music wave animation
    function stopMusicWaveAnimation() {
        $('.music-wave span').css('animation-play-state', 'paused');
    }

    // Update progress bar
    function updateProgress() {
        const duration = audio.duration || 0;
        const currentTime = audio.currentTime || 0;
        const progressPercent = (currentTime / duration) * 100;
        
        $('#progress-bar').css('width', `${progressPercent}%`);
        
        // Update time displays
        $('#current-time').text(formatTime(currentTime));
        $('#duration').text(formatTime(duration));
    }

    // Format time in MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Play next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % musicList.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Play previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + musicList.length) % musicList.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Replay current song
    function replaySong() {
        audio.currentTime = 0;
        playSong();
    }

    // Toggle mute
    function toggleMute() {
        if (isMuted) {
            audio.volume = prevVolume;
            $('#mute-btn i').removeClass('fa-volume-mute').addClass('fa-volume-up');
            $('#volume-slider').val(prevVolume * 100);
        } else {
            prevVolume = audio.volume;
            audio.volume = 0;
            $('#mute-btn i').removeClass('fa-volume-up').addClass('fa-volume-mute');
            $('#volume-slider').val(0);
        }
        isMuted = !isMuted;
    }

    // Toggle repeat mode
    function toggleRepeat() {
        switch(repeatMode) {
            case 'none':
                repeatMode = 'all';
                $('#repeat-btn').addClass('active');
                $('#repeat-btn i').removeClass('fa-repeat').addClass('fa-sync');
                break;
            case 'all':
                repeatMode = 'one';
                $('#repeat-btn').addClass('active');
                $('#repeat-btn i').removeClass('fa-sync').addClass('fa-sync-alt');
                break;
            case 'one':
                repeatMode = 'none';
                $('#repeat-btn').removeClass('active');
                $('#repeat-btn i').removeClass('fa-sync-alt').addClass('fa-repeat');
                break;
        }
    }

    // Handle song end based on repeat mode
    function handleSongEnd() {
        switch(repeatMode) {
            case 'none':
                nextSong();
                break;
            case 'all':
                nextSong();
                break;
            case 'one':
                replaySong();
                break;
        }
    }

    // Event Listeners
    
    // Play/Pause button
    $('#play-btn').on('click', function() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });
    
    // Next button
    $('#next-btn').on('click', nextSong);
    
    // Previous button
    $('#prev-btn').on('click', prevSong);
    
    // Replay button
    $('#replay-btn').on('click', replaySong);
    
    // Repeat button
    $('#repeat-btn').on('click', toggleRepeat);
    
    // Mute button
    $('#mute-btn').on('click', toggleMute);
    
    // Volume slider
    $('#volume-slider').on('input', function() {
        const volume = $(this).val() / 100;
        audio.volume = volume;
        
        // Update mute button state
        if (volume === 0) {
            $('#mute-btn i').removeClass('fa-volume-up').addClass('fa-volume-mute');
            isMuted = true;
        } else {
            $('#mute-btn i').removeClass('fa-volume-mute').addClass('fa-volume-up');
            isMuted = false;
            prevVolume = volume;
        }
    });
    
    // Progress bar click
    $('.progress-container').on('click', function(e) {
        const progressWidth = $(this).width();
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / progressWidth) * duration;
    });
    
    // Song ended event
    $(audio).on('ended', handleSongEnd);
    
    // Time update event
    $(audio).on('timeupdate', updateProgress);
    
    // Song item click
    $(document).on('click', '.song-item', function() {
        const index = parseInt($(this).data('index'));
        if (index !== currentSongIndex) {
            loadSong(index);
            playSong();
        }
    });
    
    // Playlist toggle - show popup
    $('#playlist-toggle').on('click', function() {
        $('#music-list').removeClass('hidden').addClass('show');
    });
    
    // Close playlist popup
    $('#close-playlist').on('click', function() {
        $('#music-list').removeClass('show').addClass('hidden');
    });
    
    // Close popup when clicking outside
    $('#music-list').on('click', function(e) {
        if ($(e.target).is('#music-list')) {
            $('#music-list').removeClass('show').addClass('hidden');
        }
    });
    
    // Add custom CSS for rotation
    $('<style>').text('@keyframes rotate { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }').appendTo('head');
    
    // Initialize player
    initPlayer();
});