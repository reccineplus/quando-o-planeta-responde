// Site ambient music player for "Quando o Planeta Responde"
// Plays the official site track (public/audio/musica-do-site.mp3) in a loop,
// toggled by the "SOM AMBIENTE" control in the header.
class SiteMusicPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    if (this.isPlaying) return;
    try {
      if (!this.audio) {
        this.audio = new Audio('audio/musica-do-site.mp3');
        this.audio.loop = true;
        this.audio.volume = 0.5;
        this.audio.preload = 'auto';
      }

      const playPromise = this.audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Playback was blocked or interrupted (e.g. autoplay policy) — reflect that in state.
          this.isPlaying = false;
        });
      }

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    this.audio?.pause();
    this.isPlaying = false;
  }
}

export const soundscape = new SiteMusicPlayer();
