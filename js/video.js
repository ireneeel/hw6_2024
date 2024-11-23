let videoPlayer;

window.addEventListener("load", () => {
    console.log("Window loaded, initializing video player...");
    videoPlayer = document.querySelector("#player1");
    videoPlayer.autoplay = false;
    console.log(`Autoplay enabled: ${videoPlayer.autoplay}`);
    videoPlayer.loop = false;
    console.log(`Looping enabled: ${videoPlayer.loop}`);
});

// Play functionality
document.querySelector("#play").addEventListener("click", () => {
    console.log("Playing video...");
    videoPlayer.play();
    document.querySelector("#volume").textContent = `${Math.round(videoPlayer.volume * 100)}%`;
});

// Pause functionality
document.querySelector("#pause").addEventListener("click", () => {
    console.log("Pausing video...");
    videoPlayer.pause();
});

// Slow down playback
document.querySelector("#slower").addEventListener("click", () => {
    console.log("Slowing down playback...");
    videoPlayer.playbackRate *= 0.9;
    console.log(`Current playback speed: ${videoPlayer.playbackRate.toFixed(2)}`);
});

// Speed up playback
document.querySelector("#faster").addEventListener("click", () => {
    console.log("Speeding up playback...");
    videoPlayer.playbackRate /= 0.9;
    console.log(`Current playback speed: ${videoPlayer.playbackRate.toFixed(2)}`);
});

// Skip forward
document.querySelector("#skip").addEventListener("click", () => {
    console.log("Skipping ahead...");
    videoPlayer.currentTime += 10;
    if (videoPlayer.currentTime >= videoPlayer.duration) {
        console.log("Reached the end, restarting video...");
        videoPlayer.currentTime = 0;
    }
    console.log(`Current time: ${Math.round(videoPlayer.currentTime)} seconds`);
});

// Toggle mute
document.querySelector("#mute").addEventListener("click", () => {
    videoPlayer.muted = !videoPlayer.muted;
    document.querySelector("#mute").textContent = videoPlayer.muted ? "Unmute" : "Mute";
    console.log(`Muted: ${videoPlayer.muted}`);
});

// Adjust volume
document.querySelector("#slider").addEventListener("input", (event) => {
    console.log("Adjusting volume...");
    const volumeLevel = event.target.value / 100;
    videoPlayer.volume = volumeLevel;
    document.querySelector("#volume").textContent = `${Math.round(volumeLevel * 100)}%`;
    console.log(`Volume set to: ${Math.round(volumeLevel * 100)}%`);
});

// Apply vintage effect
document.querySelector("#vintage").addEventListener("click", () => {
    console.log("Applying vintage style...");
    videoPlayer.classList.add("oldSchool");
});

// Remove vintage effect
document.querySelector("#orig").addEventListener("click", () => {
    console.log("Reverting to original style...");
    videoPlayer.classList.remove("oldSchool");
});
