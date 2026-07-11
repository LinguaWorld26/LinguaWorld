"use client";

type PronunciationButtonProps = {
  text: string;
};

export default function PronunciationButton({
  text,
}: PronunciationButtonProps) {
  function playPronunciation() {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "fr-FR";
    speech.rate = 0.8;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  }

  return (
    <button
      type="button"
      onClick={playPronunciation}
      aria-label={`Play pronunciation for ${text}`}
      className="secondary-button whitespace-nowrap"
    >
      Listen 
    </button>
  );
}